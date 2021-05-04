import {Router} from 'express';
import controller from '../controllers/user.js'
import userServer from '../middlewares/user'

const router = Router();

// router.use('/', (req,res)=>{
//     res.status(200).json({message:'Hi'});
// });

// router.get('/searchUser', controller.getuser);
// router.post('/addUser', controller.postuser);
// router.post('/destoryUser', controller.destroyuser);
// router.post('/updateUser', controller.updateuser);

//or
router.get('/get', userServer.jwtAuthenticate, controller.getuser)
router.post('/find', userServer.Authenticate, controller.getuser);
router.post('/', controller.postuser);
router.delete('/', controller.destroyuser);
router.patch('/',  controller.updateuser);



export default router;