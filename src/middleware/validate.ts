import { Request, Response, NextFunction } from 'express';
import { signinSchema, signupSchema } from '../validator/validator';


export const validateSignup = (req: Request, res: Response, next: NextFunction) => {
    const data = signupSchema.validate(req.body, {abortEarly: false});
    const {value, error} = data;
    if(error){
        res.send(error.details[0].message)
    }
    next();
}


export const validateSignin = (req: Request, res: Response, next: NextFunction) => {
    const data = signinSchema.validate(req.body, {abortEarly: false});
    const {value, error} = data;
    if(error){
        res.send(error.details[0].message)
    }
    next();
}
