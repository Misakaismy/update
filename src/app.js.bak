//引入npm所要的插件
import express from 'express';
import http from 'http';
import cookieParser from 'cookie-parser';
import path from 'path';
import cors from 'cors';
import morgan from 'morgan';
import passport from 'passport';
import session from 'express-session';
import indexRouter from './routes/index';

const app = express();

require('dotenv').config();

app.use(express.json)// 格式設定json
app.use(express.urlencoded({extends:false}));//
app.use(cookieParser());//cookie
app.use(express.static(path.resolve(__dirname, '../view')));//路由,假如沒有設定他會進入靜態葉面
app.use(morgan('dev'));//看API正不正確
app.use(cors());//跨域行為(限定白單/誰可以進入)

// 儲存篩選機制設定
app.use(session({
    secret:process.env.APP_KEY,//密鑰
    resave:false,//
    saveUninitialized:false,//
}));

// 必須要有23~27行，才能執行
app.use(passport.initialize());
app.use(passport.session());


app.use('/api', indexRouter);
// app.use('/api', (req,res)=>{
//     res.status(200).json({Message:'Hi'});
// });

//port rouge (1~65536)
//mssql port 1433

const server = http.createServer(app);

server.listen(3000);

server.on('listening',()=>{
    const address = server.address();
    console.log(`This server is on ${address.port}`)
});