import { Request, Response } from 'express';
import { BaseHandler } from '../interfaces';

class Homepage extends BaseHandler {
  /* GET home page. */
  static getHomeRoute(req: Request, res: Response) {
    return res.status(200).send({
      success: true,
      message: 'Welcome to StoryAi'
    });
  }
}

export default Homepage;
