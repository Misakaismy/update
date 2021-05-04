import {Router} from 'express';
import log from '../controllers/log'
import userServer from '../middlewares/user'

const router = Router();

// router.use('/', (req,res)=>{
//     res.status(200).json({message:'Hi'});
// });

//or
router.post('/login', userServer.Authenticate, log.login);
router.get('/register', log.register);
router.post('/remove_user', userServer.jwtAuthenticate, log.remove_user)
router.post('/update_user', userServer.jwtAuthenticate, log.update_user)

export default router;