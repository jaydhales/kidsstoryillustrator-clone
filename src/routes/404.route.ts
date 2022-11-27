import express from 'express';
import BadRoute from '../handlers/404'

const router = express.Router()

router.use('*', BadRoute.handleBadRoute);

export default router;