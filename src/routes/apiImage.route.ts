import express from 'express';
import getApiImage from '../handlers/getApiImage/apiImages';

const router = express.Router();

router.post('/get_images', getApiImage.getApiImages);

export default router;