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

import { Response, Request } from "express"
import { Types } from "mongoose"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import isEmail from 'validator/lib/isEmail'
import UserModel from '../model/user.model'

const secret = process.env.SECRET as string


export const signUp = async function (req: Request, res: Response) {
  
    try {

        if (!isEmail(req.body.email)) {
            return res.status(400).send({ message: 'Email Invalid' })
        } else {

            const { firstName, lastName, email, password, confirmPassword } = req.body

            if (password.length < 7) {
                return res.status(400).send({ message: 'Password must be above 6 characters' })
            } else {

                const checkPasword = password === confirmPassword

                if (!checkPasword) {
                    return res.status(400).send({ message: 'Passwords do not match' })
                } else {

                    const checkDatabaseForEmail = await UserModel.exists({ email: req.body.email })


                    if (checkDatabaseForEmail !== null) {
                        return res.status(400).send({ message: 'User Already Exists' })
                    } else {

                        return UserModel.create({
                            firstName: firstName,
                            lastName: lastName,
                            email: email,
                            hash: bcrypt.hashSync(password, 10)
                        }).then((user) => {
                            const { hash, isDeleted, createdAt, updatedAt, __v, ...payload } = user._doc

                            return res.status(200).send({
                                success: true,
                                message: 'Sign Up successful!',
                                data: {
                                    ...payload,
                                    token: jwt.sign(
                                        { ...payload },
                                        secret,
                                        { expiresIn: '24h' }
                                    )
                                }
                            })
                        })
                    }
                }
            }
        }
    } catch (error) {
        throw new Error((error as Error).message);
    }

}


export const signIn = async function (req: Request, res: Response) {

    try {

        const { email, password } = req.body

        if (!isEmail(email)) {
            return res.status(400).send({ message: 'Invalid Email' })
        } else {

            const user = await UserModel.findOne({ email: email })

            if (user) {
                const payload = {
                    _id: user._id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email
                }

                if (!bcrypt.compareSync(password, user.hash)) {
                    return res.status(400).send({ message: 'Invalid Password' })
                } else {
                    return res.status(200).send({
                        success: true,
                        message: 'Sign in Successful',
                        data: {
                            ...payload,
                            token: jwt.sign(
                                { ...payload },
                                secret,
                                { expiresIn: '24h' }
                            )
                        }
                    })
                }

            } else {
                return res.status(400).send({ message: 'Email or password incorrect' })
            }
        }

    } catch (error) {
        throw new Error((error as Error).message);
    }
}
