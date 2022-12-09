import * as atatus from 'atatus-nodejs/start'
import 'dotenv/config';
import 'tsconfig-paths/register';
import createError from 'http-errors';
import express, { Request, Response } from 'express';
import { cors } from './middleware/utils';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import helmet from 'helmet';

import indexRouter from './routes/index.route';
import invalidRouter from './routes/404.route';
import storyRouter from './routes/story.routes';
import userRouter from './routes/user.route';
import authRouter from './routes/auth.route';
import apiImageRouter from './routes/apiImage.route';
import swaggerDocs from './utils/swagger'
import './db/mongodb'
atatus.startMonitor();
// atatus-config.js


const app = express();

app.use(cors);
app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

swaggerDocs(app);
app.use('/', indexRouter);
app.use('/story', storyRouter);
app.use('/users', userRouter);
app.use('/auth', authRouter);
app.use('/api', apiImageRouter);
app.use('*', invalidRouter);
app.use('**', invalidRouter);


app.use((req: Request, res: Response, next) => {
  next(createError(404));
});

// error handler
app.use((err: any, req: Request, res: Response) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});

export default app;
