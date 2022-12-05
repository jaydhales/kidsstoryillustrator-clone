import express from 'express';
import { accessToken } from '../handlers/jwt_helpers';
import { Admin, User } from '../handlers/user';
import { validateSignin, validateSignup } from '../middleware/validate';
import { authorizeAdmin } from '../middleware/auth';

const router = express.Router();

router
    .route('/signup')
    .post(validateSignup, User.signup)


router
    .route('/signin')
    .post(validateSignin, User.signin)

router
    .route('/admin_signin')
    .post(validateSignin, Admin.adminSignin)

export default router
