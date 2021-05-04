import model from '../models/index';
import Sequelize from 'sequelize';

const {users} = model;

class log_function{
    login = async (req,res)=> {
        const {body} = req;
        const {email,password} = body;

        query = `SELECT * FROM users WHERE email = ${email}`;
        const info = Sequelize.query(query, {type: Sequelize.QueryTypes.SELECT});

        res.status(200).json({info});
    }

    register = async (req,res) => {
         const {body} = req;
        const {email,password,name,phone} = body;

        query = `INSERT INTO users (email, password, name, phone) VALUES (${email}, ${password}, ${name}, ${phone})`;
        const info = Sequelize.query(query, {type: Sequelize.QueryTypes.INSERT});
        const {user_id} = info
        query_level = `INSERT INTO levels (user_id, name, title, point, level) VALUES (${user_id}, ${name}, ${title}, ${point}, ${level})`;
        const level_info = Sequelize.query(query_level, {type: Sequelize.QueryTypes.INSERT});
    }

    remove_user = async (req, res) => {
        const {body} = req;
        const {email,password} = body;

        query = `DELETE FROM users WHERE email = ${email} AND password = ${password}`;
        const info = Sequelize.query(query, {type: Sequelize.QueryTypes.DELETE});
    }

    update_user = async (req, res) => {
        const {body,id} = req;
        const user_id = id;
        const {password, name, phone, icon} = body;
        
        query = `UPDATE users SET password = ${password}, name =${name}, phone = ${phone}, icon = ${icon} WHERE user_id = ${user_id}`;
        const info = Sequelize.query(query, {type: Sequelize.QueryTypes.UPDATE});
    }
}

export default new log_function();