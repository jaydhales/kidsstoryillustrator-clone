import { Request, Response } from 'express';
import UserModel from '../model/user.model';
import { signinAccessToken } from '../middleware/auth';


export const accessToken = async(req: Request, res: Response) => {
    const user = await UserModel.findOne({email: req.body.email})
    const accessToken = await signinAccessToken(user);
    res.send({
        success: true,
        data: accessToken
    });
}