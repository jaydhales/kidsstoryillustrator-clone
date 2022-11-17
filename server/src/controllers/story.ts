import { Response, Request } from "express"
import { Types } from "mongoose"
import StorybookModel from "../model/storybook.model"

export const getAllStories = async function (req: Request, res: Response) {
  try {

    StorybookModel.find({}).then((stories) => {
      return res.status(200).json({
        status: "success",
        message: "Stories successfully fetched",
        data: stories
      })
    })
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

export const getStoryById = async function (req: Request, res: Response) {
  try {
    const { id } = req.params

    if (Types.ObjectId.isValid(id)) {
      const story = await StorybookModel.findById(id)
      if (!story) {
        return res.status(404).send({
          success: false,
          message: 'Story not found'
        })
      }
      return res.status(200).send({
        success: true,
        message: 'Story retrieved successfully',
        data: story
      })
    } else {
      return res.status(404).send({ success: false, message: 'Invalid Id' })
    }
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

export const getStoryByEmail = async function (req: Request, res: Response) {
  try {
    const { email } = req.params

    const story = await StorybookModel.find({ email: email })
    if (!story) {
      return res.status(404).send({
        success: false,
        message: 'Story not found'
      })
    }
    return res.status(200).send({
      success: true,
      message: 'Story retrieved successfully',
      data: story
    })
  } catch (error) {
    throw new Error((error as Error).message);
  }
}