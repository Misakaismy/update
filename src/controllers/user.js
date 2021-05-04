// 必須知道model 才有辦法執行SQL指令
import model from '../models/index';
// import sequelize from 'sequelize';
import _ from 'lodash';

const {users} = model;

class UserController{
    getuser = async (req, res)=>{
        const {body} = req;
        const {email} =body;

        // const user = await model.sequelize.query(`SELECT * FROM user WHERE ${email}`);

        const user = await users.findAll({
            where: {
                email:email,
            }
        });

        // const reponse = _.map(user,(o)=>({
        //     ...o.dataValues,
        //     vip:true,
        // }));
        res.status(200).json({profile:user,id:`${req.id}`});
    }

    postuser = async (req, res)=>{
        const {body} = req;
        const {email, password} = body;
        const user = await users.create({
            email,
            password,
        })
        // console.log(user);
        res.status(200).json({user});
    }

    destroyuser = async (req, res)=>{
        const {body} = req;
        const {email} =body;
        const user = await users.destroy({
            where:{
                email,
            }
        })

        res.status(200).json({user});
    }

    updateuser = async (req, res)=>{
        const {body} = req;
        const {email, password} =body;
        const user = await users.update({
            password
        },{
            where:{
                email,
            }
        })

        res.status(200).json({user});
    }
}

export default new UserController();