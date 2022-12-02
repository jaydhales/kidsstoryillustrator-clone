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



export default router
