import {Router} from 'express';
import user from './user';
import activity from './activity';
import log from './log';

const router = Router();

router.use('/user', user);
router.use('/activity', activity)
router.use('/', log);

export default router;