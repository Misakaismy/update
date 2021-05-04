// 必須知道model 才有辦法執行SQL指令
import model from '../models/index';
// import sequelize from 'sequelize';
import _ from 'lodash';

const {users} = model;

class Userserver{
    getuser = async (email)=>{
        // const user = await model.sequelize.query(`SELECT * FROM user WHERE ${email}`);

        const user = await users.findOne({
            where: {
                email:email,
            }
        });

        // const reponse = _.map(user,(o)=>({
        //     ...o.dataValues,
        //     vip:true,
        // }));
        return user;
    }
}

export default new Userserver();