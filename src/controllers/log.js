import model from '../models/index';
import Sequelize from 'sequelize';
import {v4 as uuidv4} from 'uuid'

const {users} = model;


class log_function{
    

    login = async (req,res)=> {
        const {body} = req;
        const {email,password} = body;

        const query = `SELECT * FROM users WHERE email = ${email}`;
        const info = await users.sequelize.query(query, {type: Sequelize.QueryTypes.SELECT})
        res.status(200).json({info});
        
    }

    register = async (req,res) => {
        var pad = function(num) { return ('00'+num).slice(-2) };

        const {body} = req;
        const {email,password,name,phone,birth} = body;
        const date = new Date()
        const time = date.getUTCFullYear()+ '-' +pad(date.getMonth() + 1) + '-' +pad(date.getDate())+ ' ' +date.getHours()+ ':' +date.getMinutes()+ ':' +date.getSeconds()

        const query = `INSERT INTO users (user_id, email, password, name, phone, birth, createdAT , updatedAT) VALUES ('${uuidv4()}', '${email}', '${password}', '${name}', '${phone}', '${birth}','${time}','${time}')`;
        const info = await users.sequelize.query(query, {type: Sequelize.QueryTypes.INSERT})
        
        res.status(200).json({info});
    }

    remove_user = async (req, res) => {
        const {body} = req;
        const {email,password} = body;

        const query = `DELETE FROM users WHERE (email = '${email}' AND password = '${password}')`;
        const info = await users.sequelize.query(query, {type: Sequelize.QueryTypes.DELETE})
        
        res.status(200).json({info});
        
    }

    update_user = async (req, res) => {
        const {body,id} = req;
        const user_id = id;
        const {password, name, phone, icon} = body;
        
        const query = `UPDATE users SET password = '${password}', name ='${name}', phone = '${phone}', icon = '${icon}' WHERE user_id = '${user_id}'`;
        const info = await users.sequelize.query(query, {type: Sequelize.QueryTypes.UPDATE})
        
        res.status(200).json({info});
        
    }
}

export default new log_function();