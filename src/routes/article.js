import {Router} from 'express';
import article from '../controllers/article'
import userServer from '../middlewares/user'

const router = Router();

router.get('/get_article', article.get_article);
router.get('/get_userArticle', article.get_userArticle);

export default router;