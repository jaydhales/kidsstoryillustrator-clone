import express from 'express';
import { User } from '../handlers/user';

const router = express.Router();

router
    .route('/signup')
    .post(User.signup)


router
    .route('/signin')
    .post(User.signin)


export default router
