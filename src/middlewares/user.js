import passport from './passport';
import jwt from 'jsonwebtoken';

class userMiddleware{
    Authenticate = async (req, res, next)=>{
        passport.authenticate('local', {session:false},async (err, user)=>{
            if(err){
                const {status, message} = err;
                res.status(status).json({message});
                return;
            }
            // if(!user){
            //     return res.status(400).json({message:`找尋不到該用戶!${user}`});
            // }
            const data ={
                id:user.user_id,
                expireTime:new Date().getTime()+10*60*1000
            }
            const token = jwt.sign(data,process.env.APP_KEY);
            return res.status(200).json({message:`找尋成功!`,token:`${token}`});
        })(req, res, next);
    }

    registerAuthenticate = async (req, res, next)=>{
        passport.authenticate('register', {session:false},async (err, user)=>{
            if(err){
                const {status, message} = err;
                res.status(status).json({message});
                return;
            }
            // if(!user){
            //     return res.status(400).json({message:`找尋不到該用戶!${user}`});
            // }
            return res.status(404).json({message:`已有人註冊!`});
        })(req, res, next);
    }

    // 解密
    decodeToken = (token)=>{
        try{
            return jwt.verify(token,process.env.APP_KEY);
        }
        catch(err){
            return err
        }
        
    }

    jwtAuthenticate = async (req, res, next)=>{
        passport.authenticate('jwt', {session:false},async (err, user,info)=>{
            if (info){
                res.status(401).json({message:'尚未登入!'})
            }
            if(err){
                const {status, message} = err;
                res.status(status).json({message});
                return;
            }
            const {user_id} = user;
            req.id = user_id;
            next();

        })(req, res, next);
    }
}
export default new userMiddleware();