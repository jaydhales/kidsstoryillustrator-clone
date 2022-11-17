import express from 'express';
import http from 'http';

import { config } from './config/config';
import Logging from './library/Logger';

const app = express();

app.get('/', (req, res, next) => res.status(200).json({ message: 'Welcome to STORY.AI' }));

app.use((req, res, next) => {
    const error = new Error('Not Found');
    Logging.error(error);

    return res.status(404).json({ message: error.message });
});

http.createServer(app).listen(config.server.port, () => Logging.info('Server is running on port ' + config.server.port));
