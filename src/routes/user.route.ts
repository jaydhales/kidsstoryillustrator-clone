import express from 'express';
import { User } from '../handlers/user';
import { authorizeAdmin } from '../middleware/auth';

const router = express.Router();

router
    .route('/')
    .get(authorizeAdmin, User.getAllUsers)

router
    .route('/:id')
    .get(User.getAUser)
    .put(authorizeAdmin, User.updateAUser)
    .delete(authorizeAdmin, User.deleteUser)

router
    .route('/forgot-password')
    .post(User.forgotPassword)

router
    .route('/reset-password/:id/:token')
    .post(User.resetPassword)



export default router
