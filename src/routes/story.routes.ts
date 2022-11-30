import express from 'express';
import { StoryLookUp } from '../handlers/story';
import { protect } from '../middleware/auth';

const router = express.Router();

router
  .route('/')
  .get(StoryLookUp.getAllStories)

router
  .route('/:id')
  .get(StoryLookUp.getStoryById)
  .delete(StoryLookUp.deleteAStory)

router
  .route('/:email')
  .get(StoryLookUp.getStoryByEmail)

router
  .route('/post_story')
  .post(StoryLookUp.postStory)
  

export default router
