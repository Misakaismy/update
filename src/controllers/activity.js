import Sequelize  from 'sequelize';
import model from '../models/index'

const {levels} = model;

class User_activity{
    get_info = async (req, res) => {
        const {id} = req

        query = `SELECT * FROM levels WHERE user_id = ${id}`;
        const info = await Sequelize.query(query, {type: Sequelize.QueryTypes.SELECT});
    }

    get_title = async (req, res)=>{
        const {id} = req

        query = `SELECT name, title FROM levels WHERE user_id = ${id}`;
        const title = await Sequelize.query(query, {type: Sequelize.QueryTypes.SELECT});
    }

    get_level = async (req, res)=>{
        const {id} = req

        query = `SELECT name, level FROM levels WHERE user_id = ${id}`;
        const level = await Sequelize.query(query, {type: Sequelize.QueryTypes.SELECT});
    }
}

export default new User_activity();