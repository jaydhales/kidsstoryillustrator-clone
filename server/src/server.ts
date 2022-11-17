import express from 'express';

import { config } from './config/config';
import Logging from './library/Logger';

const app = express();

app.get('/', (req, res, next) => res.send({ message: 'Welcome to STORY.AI' }));

app.use((req, res, next) => {
    const error = new Error('Not Found');
    Logging.error(error);

    return res.status(404).json({ message: error.message });
});

app.listen(config.server.port, () => Logging.info(`Server running on Port ${config.server.port}`));
