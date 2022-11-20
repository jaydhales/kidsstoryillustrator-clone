import express, { Request, Response } from 'express';

import { config } from './config/config';
import Logging from './library/Logger';

import path from 'path';

import authRouter from './routes/user.route';
import storyRouter from './routes/story.route';
import './db/mongodb';

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req: Request, res: Response, next: any) => res.send({ message: 'Welcome to STORY.AI' }));
app.use('/auth/', authRouter);
app.use('/story/', storyRouter);

app.use((req: Request, res: Response, next: any) => {
    const error = new Error('Not Found');
    Logging.error(error);

    return res.status(404).json({ message: error.message });
});

app.listen(config.server.port, () => Logging.info(`Server running on Port ${config.server.port}`));
