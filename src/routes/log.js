import {Router} from 'express';
import log from '../controllers/log'
import userServer from '../middlewares/user'

const router = Router();

// router.use('/', (req,res)=>{
//     res.status(200).json({message:'Hi'});
// });

//or
router.post('/', userServer.registerAuthenticate,log.register);
router.get('/', userServer.Authenticate,log.login);
router.delete('/', userServer.jwtAuthenticate, log.remove_user)
router.patch('/', userServer.jwtAuthenticate, log.update_user)

export default router;