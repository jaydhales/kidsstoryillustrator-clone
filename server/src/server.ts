import express from 'express';
import { config } from './config/config';
import Logging from './library/Logger';
import routes from './routes/index';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger3.json'
import swaggerDocs from './utils/swagger';

const app = express();

app.use(express.json());

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
swaggerDocs(app)
app.get('/', (req, res, next) => res.send({ message: 'Welcome to STORY.AI' }));

app.use('/story', routes )

app.use((req, res, next) => {
    const error = new Error('Not Found');
    Logging.error(error);

    return res.status(404).json({ message: error.message });
});

app.listen(config.server.port, () => {Logging.info(`Server running on Port ${config.server.port}`)});
