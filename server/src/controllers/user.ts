import { Request, Response } from "express";

export const createUser = async function (req: Request, res: Response) {
  try {
    return res.status(201).json({
      status: "success",
      message: "create users here",
    })
  } catch (error) {
    return res.status(200).json({
      status: "error",
      error: error.message
    })
  }
}

export const updateUser = function (req: Request, res: Response) {
  return res.status(200).json({
    message: "update a user here"
  })
}

export const deleteUser = function (req: Request, res: Response) {
  return res.status(200).json({
    message: "delete a user here"
  })
}