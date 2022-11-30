import { Request, Response } from 'express';
import { BaseHandler } from '../interfaces';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import isEmail from 'validator/lib/isEmail';
import UserModel from '../model/user.model';

const secret = process.env.SECRET as string;
export class User extends BaseHandler {
  static async signup(req: Request, res: Response) {
    try {
      if (!isEmail(req.body.email)) {
        return res.status(400).send({ message: 'Email Invalid' });
      } else {
        const { email, username, password } = req.body;

        if (password.length < 7) {
          return res
            .status(400)
            .send({ message: 'Password must be above 6 characters' });
        } else {
          const checkDatabaseForEmail = await UserModel.exists({
            email: req.body.email
          });

          if (checkDatabaseForEmail !== null) {
            return res.status(400).send({ message: 'User Already Exists' });
          } else {
            return UserModel.create({
              username: username,
              email: email,
              hash: bcrypt.hashSync(password, 10)
            }).then((user) => {
              const { hash, createdAt, updatedAt, __v, ...payload } = user._doc;

              return res.status(200).send({
                success: true,
                message: 'Sign Up successful!',
                data: {
                  ...payload,
                  token: jwt.sign({ ...payload }, secret, { expiresIn: '24h' })
                }
              });
            });
          }
        }
      }
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  static async signin(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      if (!isEmail(email)) {
        return res.status(400).send({ message: 'Invalid Email' });
      } else {
        const user = await UserModel.findOne({ email: email });

        if (user) {
          const payload = {
            _id: user._id,
            username: user.username,
            email: user.email,
            isAdmin: user.isAdmin
          };

          if (!bcrypt.compareSync(password, user.hash)) {
            return res.status(400).send({ message: 'Invalid Password' });
          } else {
            return res.status(200).send({
              success: true,
              message: 'Sign in Successful',
              data: {
                ...payload,
                token: jwt.sign({ ...payload }, secret, { expiresIn: '24h' })
              }
            });
          }
        } else {
          return res
            .status(400)
            .send({ message: 'Email or password incorrect' });
        }
      }
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  static async getAllUsers(req: Request, res: Response) {
    try {
      const allUsers = await UserModel.find();
      if (!allUsers) {
        return res.status(400).json({
          success: false,
          message: 'Users not found'
        });
      } else {
        return res.status(200).json({
          success: true,
          message: 'Users successfully fetched',
          data: allUsers
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
}
