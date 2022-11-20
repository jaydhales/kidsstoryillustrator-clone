import { Request, Response } from 'express';

export const createStory = async function (req: Request, res: Response) {
    try {
        return res.status(201).json({
            status: 'success',
            message: 'create your stories here'
        });
    } catch (error) {
        return res.status(200).json({
            status: 'error',
            error: error.message
        });
    }
};

export const updateStory = function (req: Request, res: Response) {
    return res.status(200).json({
        message: 'update a story by id here'
    });
};

export const deleteStory = function (req: Request, res: Response) {
    return res.status(200).json({
        message: 'delete a story by email here'
    });
};
