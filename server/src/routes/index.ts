const express = require("express");
const router = express.Router();
const { getAllStories, getOneStoryById, getOneStoryByEmail } = require('../controllers/stories')

// story routes
router.route('/get-story')
  .get(getAllStories)

router.route('/get-story/:id')
  .get(getOneStoryById)

router.route('/get-user/:email')
  .get(getOneStoryByEmail)

module.exports = router;