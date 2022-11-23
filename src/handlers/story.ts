import { Request, Response } from 'express';
import { Types } from 'mongoose';
import { BaseHandler } from '../interfaces';
import StorybookModel from '../model/storybook.model';

export class StoryLookUp extends BaseHandler {


  static async getAllStories(req: Request, res: Response) {
    try {
      const allStories = await StorybookModel.find({}).populate({
        path: 'author',
        select: 'username _id'
      });
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
        const story = await StorybookModel.findById(id).populate("author");

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
      const { email } = req.params

      const story = await StorybookModel.findOne({ email: email }).populate('author');

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
      const { decoded, title, numberOfPages, scenes } = req.body;
      const author = decoded._id ? decoded._id : null;

      if (!author || author == null) {
        return res.status(400).json({
          status: 'error',
          messgage: 'author in missing, please sign in'
        });
      }
      if (!title) {
        return res.status(400).json({
          status: 'error',
          messgage: 'title in missing'
        });
      }
      if (!numberOfPages) {
        return res.status(400).json({
          status: 'error',
          messgage: 'numberOfPages in missing'
        });
      }
      if (!scenes) {
        return res.status(400).json({
          status: 'error',
          message: 'scenes in missing'
        });
      }
      const newStory = {
        author,
        title,
        numberOfPages,
        scenes
      };
      if (!newStory) {
        return res.status(400).json({
          status: 'error',
          message: 'new story was not created successfully'
        });
      }

      const story = new StorybookModel(newStory);
      const savedStory = await story.save();

      console.log('its working', savedStory);
      return res.status(201).json({
        success: true,
        data: savedStory
      });
    } catch (error: any) {
      return res.status(500).json({
        status: 'error',
        message: 'server error'
      });
    }
  }

  static async deleteAStory(req: Request, res: Response) {

    const storyId = req.params.id

    try {
      if (Types.ObjectId.isValid(storyId)) {
        const story = await StorybookModel.findByIdAndDelete(storyId)

        if (!story) {
          return res.status(404).send({
            success: false,
            message: 'Story not found'
          })
        } else {

          return res.status(200).send({
            success: true,
            message: 'Story Successfully Deleted'
          })
        }
      } else {
        return res.status(404).send({
          success: false,
          message: 'Invalid ID'
        })
      }

    } catch (error) {
      throw new Error((error as Error).message);
    }

  }

}
