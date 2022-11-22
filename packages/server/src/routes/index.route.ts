import express from 'express';
import Homepage from '../handlers';

const router = express.Router()

router.get('/',  Homepage.getHomeRoute);

export default router;