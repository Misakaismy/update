import passport from 'passport';
import LocalStrategy from 'passport-local';
import userServer from '../servers/user_function';
import {Strategy as jwtStrategy, ExtractJwt} from 'passport-jwt';
import truncate from 'lodash.truncate';


require('dotenv').config();
// jwt option
const options = {
    secretOrKey: process.env.APP_KEY,
    jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
}

passport.use('local' ,new LocalStrategy({
    // 更改變數名稱
    usernameField:'email',
    passwordField:'password'
    }, async(email, password, callback)=>{
        const user = await userServer.getuser(email);
        if (!user) {
            // 第一個是傳直、第二個成功與否、三是flash message
            // return callback(null, false, { message: '信箱錯誤' });
            return callback({status: 404,message:'找不到該用戶!'},false)
        }
        if (password !== user.password){
            // return done(null,false,{message:'密碼錯誤!'})
            return callback({status: 404,message:'密碼錯誤!'},false)
        }
        return callback(null, user);
    }
));

passport.use(new jwtStrategy(options, (payload, callback)=>{
    // expireTime, id
    const status = calcExpireTime(payload);
    if (!status){
        return callback({status:404,message:'Token 到期 請重新登入!'})
    }
    return callback(null, payload)
}))

// function
const calcExpireTime = (payload)=>{
    const {expireTime} = payload;
    const currentTime = new Date().getTime();

    if (currentTime > expireTime){
        return false;
    }
    return true;
}

export default passport;