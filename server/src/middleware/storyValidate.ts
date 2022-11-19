import { Response, Request, NextFunction} from 'express';
import { validateCreateStory, validateUpdateStory } from '../validator/validator';

export const createStoryValidate = (req: Request, res: Response, next: NextFunction) => {
    try {
        validateCreateStory(req.body)
        console.log('Valid Data!')
        next();
    } catch (error) {
        console.log(error);
        return res.status(400).send('Invalid Story Details')
    }
}

export const updateStoryValidate = (req: Request, res: Response, next: NextFunction) => {
    try {
        validateUpdateStory(req.body)
        console.log('Valid Data!')
        next();
    } catch (error) {
        console.log(error);
        return res.status(400).send('Invalid Story Details')
    }
}