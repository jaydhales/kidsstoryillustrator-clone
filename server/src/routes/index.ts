import express from 'express';
const router = express.Router();
import { getAllStories, getStoryById, getStoryByEmail } from '../controllers/story';
// story routes
router.route('/get-story')
  .get(getAllStories)

router.route('/get-story/:id')
  .get(getStoryById)

router.route('/get-by-email/:email')
  .get(getStoryByEmail)
export default router