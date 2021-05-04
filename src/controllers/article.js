import model from '../models/index';
import Sequelize from 'sequelize';

const {article} = model;

class article_search{
    get_article = async (req, res)=>{
        query = `SELECT * FROM article`;
        const info = await Sequelize.query(query, {type: Sequelize.QueryTypes.SELECT});
    }

    get_userArticle = async (req, res)=>{
        const {id} = req;

        query = `SELECT * FROM article WHERE user_id = ${id}`
        const info = await Sequelize.query(query, {type: Sequelize.QueryTypes.SELECT});
    }
}

export default new article_search();