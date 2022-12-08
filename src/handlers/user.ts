import { Request, Response } from 'express';
import { BaseHandler, IUser } from '../interfaces';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import isEmail from 'validator/lib/isEmail';
import UserModel from '../model/user.model';
import { Types } from 'mongoose';
import sendEmail from '../utils/sendMail';

const secret = process.env.SECRET as string;
const base_url = process.env.BASE_URL as string;

const generateAvatar = (x: string, y: string) => {
  return `https://ui-avatars.com/api/?name=${x}+${y}&background=aa0136&rounded=true&bold=false&color=ffffff`
}

export class User extends BaseHandler {
  static async signup(req: Request, res: Response) {
    try {
      if (!isEmail(req.body.email)) {
        return res.status(400).send({ message: 'Email Invalid' });
      } else {
        const { email, username, firstName, lastName, password } = req.body;

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
              firstName: firstName,
              lastName: lastName,
              email: email,
              hash: bcrypt.hashSync(password, 10),
              avatar: generateAvatar(firstName, lastName)
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
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            isAdmin: user.isAdmin,
            avatar: user.avatar
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

  static getAUser(req: Request, res: Response) {

        try {

            const id = req.params.id

            if (Types.ObjectId.isValid(id)) {
                UserModel.findOne({ _id: id })
                    .then((user) => {
                        !user
                            ? res.status(404).send({ success: false, message: 'User not found' })
                            : res.status(200).send({ success: true, message: 'User retrieved successfully', data: user })
                    })
            } else {
                return res.status(404).send({ success: false, message: 'Invalid Id' })
            }
        } catch (error) {
            throw new Error((error as Error).message)
        }
    }

  static async getAllUsers(req: Request, res: Response) {
    try {
      const allUsers = await UserModel.find({isAdmin: {$ne: true}});
      if (!allUsers) {
        return res.status(400).json({
          success: false,
          message: 'Users not found'
        });
      } else {
        return res.status(200).json({
          success: true,
          count: allUsers.length,
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

  static async deleteUser(req: Request, res: Response) {
    const userId = req.params.id;

    try {
      if (Types.ObjectId.isValid(userId)) {
        const user = await UserModel.findByIdAndDelete(userId);

        if (!user) {
          return res.status(404).send({
            success: false,
            message: 'User not found'
          });
        } else {
          return res.status(200).send({
            success: true,
            message: 'User Successfully Deleted'
          });
        }
      } else {
        return res.status(404).send({
          success: false,
          message: 'Invalid UserID'
        });
      }
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  static async updateAUser(req: Request, res: Response) {

    try {
        const userId = req.params.id
        const { username, firstName, lastName, email, isAdmin } = req.body

        if (Types.ObjectId.isValid(userId)) {

            UserModel.findById({ _id: userId }, (error: Error, document: IUser) => {
                if (error) return res.send({ success: false, message: 'Update failed: ' + error })

                if (document) {
                    document.username = username || document.username
                    document.email = email || document.email
                    document.firstName = firstName || document.firstName
                    document.lastName = lastName || document.lastName
                    document.isAdmin = isAdmin || document.isAdmin

                    document.save().then(async (user: IUser) => {

                        return res.status(200).send({
                            success: true,
                            message: 'User Updated Successfully',
                            data: user
                        })
                    }).catch((error: Error) => {
                        throw new Error(error.message);
                    })
                } else {
                    return res.status(404).send(
                        {
                            success: false,
                            message: 'User not found'
                        })
                }
            })
        } else {
            return res.status(404).send(
                {
                    success: false,
                    message: 'Invalid ID'
                })
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
          const link = `${base_url}users/reset-password/${user._id}/${token}`;
          await sendEmail(user.email, 'Password Reset Link', link);
          res.send('Password reset link sent to your email account!')
      }
  } catch (error) {
      res.send('An error occured')
      console.log(error)
  }
}
}


export class Admin extends BaseHandler {

  static async adminSignin(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      if (!isEmail(email)) {
        return res.status(400).send({ message: 'Invalid Email' });
      } else {
        const user = await UserModel.findOne({ email: email, isAdmin: true });

        if (user) {
          const payload = {
            _id: user._id,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
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

}
