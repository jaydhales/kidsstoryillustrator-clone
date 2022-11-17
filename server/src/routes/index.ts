import express from 'express';
const router = express.Router();
import { getAllStories, getStoryById, getStoryByEmail } from '../controllers/story';
// story routes
router.route('/get-story')
  .get(getAllStories)
  .post()
  .put()
  .delete()

router.route('/get-story/:id')
  .get(getStoryById)
  .post()
  .put()
  .delete()

router.route('/get-by-email/:email')
  .get(getStoryByEmail)
  .post()
  .put()
  .delete()


export default router