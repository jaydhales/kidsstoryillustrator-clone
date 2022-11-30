import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction} from 'express';
import { getToken } from './utils'

const jwtSecretKey = process.env.SECRET as string

export const protect = async (req: Request, res: Response, next: NextFunction) => {
  // get the token
  try {
    const token = req.headers.authorization? req.headers.authorization.split(' ')[1] : null;

    if(token == null) {
      return res.status(400).json({ message: 'No Token Provided!' });
    }
    // decode the token
    const decoded = jwt.verify(token, jwtSecretKey);
    // add the user to the request
    req.body.decoded = decoded;
    // call the next middleware
    next();
  } catch (error) {
    return res.status(401).json({
      status: 'authentication error',
      msg: 'sign in to continue'
    });
  }
};

export interface IToken {
  isAdmin: boolean;
}

export const authorizeAdmin = async (req: Request, res: Response, next: NextFunction) => {
  const token = getToken(req)
  try {
      jwt.verify(token, jwtSecretKey, (err, decoded) => {
          if ( (decoded && (decoded as IToken).isAdmin === true) ) {
              return next() 
          } else {
              return res.status(403).send({ message: 'Forbidden! Only an admin can perform this action' }) 
          }
      })
  } catch (err) {
      return res.send(err)
  }
}