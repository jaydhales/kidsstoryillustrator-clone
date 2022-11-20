import { Response, Request } from 'express';
import { Types } from 'mongoose';
import StorybookModel from '../model/storybook.model';

export const getAllStories = async function (req: Request, res: Response) {
    try {
        const allStories = await StorybookModel.find({}).populate('author');
        if (!allStories) {
            return res.status(400).json({
                status: 'error',
                message: 'Stories not found'
            });
        } else {
            return res.status(200).json({
                status: 'success',
                message: 'Stories successfully fetched',
                data: allStories
            });
        }
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: 'It is not you, it is us, in a while the server will be up',
            error_message: error.message
        });
    }
};

export const getStoryById = async function (req: Request, res: Response) {
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
            return res.status(404).send({ success: false, message: 'Invalid story Id' });
        }
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: 'It is not you, it is us, in a while the server will be up',
            error_message: error.message
        });
    }
};

export const getStoryByEmail = async function (req: Request, res: Response) {
    try {
        const { email } = req.params;

        const story = await StorybookModel.find({ email: email }).populate('author');

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
    } catch (error) {
        return res.status(500).json({
            status: 'server error',
            message: error.message
        });
    }
};
