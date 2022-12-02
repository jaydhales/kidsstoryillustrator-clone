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

router
    .route('/forgot-password')
    .post(User.forgotPassword)

router
    .route('/reset-password/:id/:token')
    .post(User.resetPassword)


export default router
