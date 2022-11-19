import express from 'express';
const router = express.Router();
import { getAllStories, getStoryById, getStoryByEmail } from '../controllers/get-story';
import { createStory, updateStory, deleteStory } from '../controllers/post-story';
import { createUser, updateUser, deleteUser } from '../controllers/user';
import {signupValidate} from '../middleware/authValidate'
import { createStoryValidate, updateStoryValidate } from '../middleware/storyValidate';

// get routes 
router.route('/get-story')
  .get(getAllStories)
  .delete(deleteUser)

router.route('/get-story/:id')
  .get(getStoryById)
  .delete()

router.route('/get-by-email/:email')
  .get(getStoryByEmail)
  .delete()


// post routes
router.route('/create-story')
  .post(createStoryValidate, createStory)

router.route('/update-story/:id')
  .put(updateStoryValidate, updateStory)

router.route('/delete-story/:id')
  .delete(deleteStory)

// user routes
router.route('/create-user')
  .post(signupValidate, createUser)

router.route('/update-user')
  .put(updateUser)

router.route('/delete-user')
  .delete(deleteUser)

export default router