import express from 'express';
import { User, Admin } from '../handlers/user';
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
    .route('/:id/archive')
    .post(authorizeAdmin, Admin.archiveAUser)

router
    .route('/:id/unarchive')
    .post(authorizeAdmin, Admin.unArchiveAUser)

router
    .route('/forgot-password')
    .post(User.forgotPassword)

router
    .route('/reset-password/:id/:token')
    .post(User.resetPassword)



export default router
