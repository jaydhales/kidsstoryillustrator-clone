import express from 'express';
import { User } from '../handlers/user';
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
    .route('/getAllUsers')
    .get(authorizeAdmin, User.getAllUsers)

router
    .route('/deleteUser')
    .delete(authorizeAdmin, User.deleteUser)

export default router
