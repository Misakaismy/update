import {Router} from 'express';
import activity from '../controllers/activity'
import point from '../controllers/point'
import userServer from '../middlewares/user'

const router = Router();

// router.use('/', (req,res)=>{
//     res.status(200).json({message:'Hi'});
// });

router.get('/', activity.get_info);

router.get('/get_title', activity.get_title);

router.get('/get_level', activity.get_level);

router.post('/add_point', point.add_point);
router.post('/use_point', point.use_point);

export default router;