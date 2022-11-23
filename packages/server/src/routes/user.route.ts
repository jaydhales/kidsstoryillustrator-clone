import express from 'express';
import { User } from '../handlers/user';
import { validateSignin, validateSignup } from '../middleware/validate';

const router = express.Router();

router
    .route('/signup')
    .post(validateSignup, User.signup)


router
    .route('/signin')
    .post(validateSignin, User.signin)


export default router
