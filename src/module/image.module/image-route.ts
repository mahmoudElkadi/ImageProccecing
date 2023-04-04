import express from 'express';
import resizedImage from './controller/image.controller';
import middleware from '../../middleware/middleware';

const imageRouter = express.Router();

imageRouter.get(
  '/image',
  middleware.valdationImage,
  middleware.existIamge,
  resizedImage
);

export default imageRouter;
