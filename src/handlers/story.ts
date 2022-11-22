import { Request, Response, ErrorRequestHandler } from 'express';
import { Types } from 'mongoose';
import { BaseHandler } from '../interfaces';
import StorybookModel from '../model/storybook.model';

export class StoryLookUp extends BaseHandler {
  static async getAllStories(req: Request, res: Response) {
    try {
      const allStories = await StorybookModel.find({}).populate('author');
      if (!allStories) {
        return res.status(400).json({
          success: false,
          message: 'Stories not found'
        });
      } else {
        return res.status(200).json({
          success: true,
          message: 'Stories successfully fetched',
          data: allStories
        });
      }
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: 'It is not you, it is us, in a while the server will be up',
        error_message: error.message
      });
    }
  }

  static async getStoryById(req: Request, res: Response) {
    try {
      const { id } = req.params;

      if (Types.ObjectId.isValid(id)) {
        const story = await StorybookModel.findById(id).populate('author');

        if (!story) {
          return res.status(404).send({
            success: false,
            message: 'Story not found'
          });
        }
        return res.status(200).send({
          success: true,
          message: 'Story retrieved successfully',
          data: story
        });
      } else {
        return res
          .status(404)
          .send({ success: false, message: 'Invalid story Id' });
      }
    } catch (error: any) {
      return res.status(500).json({
        status: 'error',
        message: 'It is not you, it is us, in a while the server will be up',
        error_message: error.message
      });
    }
  }

  static async getStoryByEmail(req: Request, res: Response) {
    try {
      const { email } = req.params;

      const story = await StorybookModel.findOne({ email: email }).populate(
        'author'
      );

      if (!story) {
        return res.status(404).json({
          success: false,
          message: 'Story not found'
        });
      }
      return res.status(200).json({
        success: true,
        message: 'Story retrieved successfully',
        data: story
      });
    } catch (error: any) {
      return res.status(500).json({
        status: 'server error',
        message: error.message
      });
    }
  }

  static async postStory(req: Request, res: Response) {
    try {
      const author = req.user;
      const { title, numberOfPages, scenes } = req.body;
      if (!author) {
        // redirect the user to login
        res.status(400).json({
          status: 'error',
          messgage: 'author in missing'
        });
      }
      if (!title) {
        res.status(400).json({
          status: 'error',
          messgage: 'title in missing'
        });
      }
      if (!numberOfPages) {
        res.status(400).json({
          status: 'error',
          messgage: 'numberOfPages in missing'
        });
      }
      if (!scenes) {
        res.status(400).json({
          status: 'error',
          messgage: 'scenes in missing'
        });
      }
      const newStory = {
        author,
        title,
        numberOfPages,
        scenes
      };
      
      const story = new StorybookModel(newStory);
      const savedStory = await story.save();

      console.log('its working',savedStory);
      return res.status(201).json({
        success: true,
        data: savedStory
      });
    } catch (error: any) {
      res.status(500).json({
        status: 'error',
        message: 'server error'
      });
    }
  }
}
