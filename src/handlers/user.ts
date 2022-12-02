import { Request, Response } from 'express';
import { BaseHandler } from '../interfaces';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import isEmail from 'validator/lib/isEmail';
import UserModel from '../model/user.model';
import sendEmail from '../utils/sendEmail';

const secret = process.env.SECRET as string
const base_url = process.env.BASE_URL as string
export class User extends BaseHandler {

    static async signup(req: Request, res: Response) {

        try {
            if (!isEmail(req.body.email)) {
                return res.status(400).send({ message: 'Email Invalid' });
            } else {
                const { email, username, password } = req.body;

                if (password.length < 7) {
                    return res.status(400).send({ message: 'Password must be above 6 characters' });
                } else {

                    const checkDatabaseForEmail = await UserModel.exists({ email: req.body.email });

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
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email
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
                    return res.status(400).send({ message: 'Email or password incorrect' });
                }
            }
        } catch (error) {
            throw new Error((error as Error).message);
        }
    }

    static async resetPassword(req: Request, res: Response) {
        const { id, token } = req.params;
        const {password1, password2 } = req.body;
        const user = await UserModel.findById(id);
        if(!user){
          return res.status(400).send({ message: 'Incorrect details' });
        }
        try {
          const payload = jwt.verify(token, secret);
          if(password1 !== password2){
            return res.status(400).send({ message: 'Passwords don\'t match' });
          }
          const foundUser = await UserModel.findById(user._id)
          if(!foundUser){
            return res.status(400).send({ message: 'Token Expired!' });
          }
          foundUser.hash = bcrypt.hashSync(password1, 10);
          foundUser.save()
          return res.status(200).send({
            success: true,
            message: 'Password Reset Successful'
        });
        } catch (error) {
            res.send('An error occured')
            console.log(error)
        }
    }

    static async forgotPassword(req: Request, res: Response) {
      const { email } = req.body;
      try {
          if (!isEmail(email)) {
              return res.status(400).send({ message: 'Invalid Email' });
          } else {
              const user = await UserModel.findOne({email: email});
              if(!user){
                  return res.status(400).send({ message: 'Email or password incorrect' });
              }
              const payload = {
                  _id: user._id,
                  firstName: user.firstName,
                  lastName: user.lastName,
                  email: user.email
              };
              const token = jwt.sign({ ...payload }, secret, { expiresIn: '15m' });
              const link = `${base_url}user/reset-password/${user._id}/${token}`;
              await sendEmail('jigah4thjuly@gmail.com', 'Password Reset Link', link);
              res.send('Password reset link sent to your email account!')
          }
      } catch (error) {
          res.send('An error occured')
          console.log(error)
      }
  }

}