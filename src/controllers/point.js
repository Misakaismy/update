import Sequelize  from 'sequelize';
import model from '../models/index'

const {levels} = model;

class User_point{
    add_point = async (req, res)=>{
        const {id} = req

        query = `SELECT name, point FROM levels WHERE user_id = ${id}`;
        const point = Sequelize.query(query, {type: Sequelize.QueryTypes.SELECT});

        
    }

    use_point = async (req, res)=>{
        const {id} = req

        query = `SELECT name, point FROM levels WHERE user_id = ${id}`;
        const point = Sequelize.query(query, {type: Sequelize.QueryTypes.SELECT});
    }
}

export default new User_point();