import express, { Request, Response} from 'express';
import Homepage from '../handlers';

const router = express.Router()

router.get('/',  Homepage.getHomeRoute);

export default router;