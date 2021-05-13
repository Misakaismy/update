import model from '../models/index';
import Sequelize from 'sequelize';
import {v4 as uuidv4} from 'uuid'

const {users} = model;


class log_function{
    get_time = ()=>{
        var pad = function(num) { return ('00'+num).slice(-2) };
        const date = new Date()
        const time = date.getUTCFullYear()+ '-' +pad(date.getMonth() + 1) + '-' +pad(date.getDate())+ ' ' +date.getHours()+ ':' +date.getMinutes()+ ':' +date.getSeconds()
        return {time}
    }

    check_account = async (email) => {
        const query = `SELECT * FROM users WHERE email = '${email}'`;
        const user = await users.sequelize.query(query, {type: Sequelize.QueryTypes.SELECT})

        if(user != ""){
            return true;
        }
        return false;
    }

    login = async (req,res)=> {
        const {body} = req;
        const {email,password} = body;

        const query = `SELECT * FROM users WHERE email = '${email}'`;
        const info = await users.sequelize.query(query, {type: Sequelize.QueryTypes.SELECT}).then((result)=>{
            res.status(200).json({result});
        })
        
    }

    register = async (req,res) => {

        const {body} = req;
        const {email,password,name,phone,birth} = body;
        const callback = await this.check_account(email)

        if (callback) {
            return res.status(404).json({result:'此信箱已註冊!'});
        }
        const query = `INSERT INTO users (user_id, email, password, name, phone, birth, createdAT , updatedAT) VALUES ('${uuidv4()}', '${email}', '${password}', '${name}', '${phone}', '${birth}','${this.get_time().time}','${this.get_time().time}')`;
        await users.sequelize.query(query, {type: Sequelize.QueryTypes.INSERT}).then((result)=>{
            return res.status(200).json({result});
        })
        
        

    }

    remove_user = async (req, res) => {
        const {body} = req;
        const {email,password} = body;

        const query = `DELETE FROM users WHERE (email = '${email}' AND password = '${password}')`;
        await users.sequelize.query(query, {type: Sequelize.QueryTypes.DELETE}).then((result)=>{
            res.status(200).json({result:'刪除成功!'});
        })
        
    }

    update_user = async (req, res) => {
        const {body,id} = req;
        const user_id = id;
        const {password, name, phone, icon} = body;
        
        const query = `UPDATE users SET password = '${password}', name ='${name}', phone = '${phone}', icon = '${icon}', updatedAT = '${this.get_time()}' WHERE user_id = '${user_id}'`;
        await users.sequelize.query(query, {type: Sequelize.QueryTypes.UPDATE}).then((result)=>{
            res.status(200).json({result:'更新成功!'});
        })
        
    }
}

export default new log_function();