import express from 'express';
import { StoryLookUp } from '../handlers/story';
import protect  from '../middleware/auth';

const router = express.Router();

router
  .route('/get_story')
  .get(StoryLookUp.getAllStories)

router
  .route('/get_story/:id')
  .get(StoryLookUp.getStoryById)


router
  .route('/get_by_email/:email')
  .get(StoryLookUp.getStoryByEmail)

router
  .route('/post_story')
  .post(protect, StoryLookUp.postStory)


export default router
