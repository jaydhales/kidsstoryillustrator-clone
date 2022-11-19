import express from 'express';
import { getAllStories, getStoryById, getStoryByEmail } from '../controllers/story';

const router = express.Router();

router
  .route('/get_story')
  .get(getAllStories)

router
  .route('/get_story/:id')
  .get(getStoryById)


router
  .route('/get_by_email/:email')
  .get(getStoryByEmail)


export default router