import {validateSignup, validateLogin} from '../validator/validator';
import { Response, Request, NextFunction} from 'express';

export const signupValidate = (req: Request, res: Response, next: NextFunction) => {
    try {
        validateSignup(req.body)
        console.log('Valid Data!')
        next();
    } catch (error) {
        console.log(error);
        return res.status(400).send('Invalid Signup Details')
    }
}

export const loginValidate = (req: Request, res: Response, next: NextFunction) => {
    try {
        validateLogin(req.body)
        console.log('Valid Data!')
        next();
    } catch (error) {
        console.log(error);
        return res.status(400).send('Invalid Signup Details')
    }
}