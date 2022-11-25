import swaggerUi from 'swagger-ui-express';
import express, {Request, Response} from 'express';
import swaggerDocument from '../swagger.json';

const swaggerDoc1 = swaggerUi.generateHTML(swaggerDocument, {});

// API Docs initialization using Swagger

function swaggerDocs(app: any) {

  app.use('/docs', swaggerUi.serveFiles(swaggerDocument, {}))
  app.get('/docs', (req: Request, res: Response) => { res.send(swaggerDoc1) });

  // Docs in JSON format
  app.get('/docs.json', (req: Request, res: Response) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerDocument);
  });

  console.log('API docs running...')

}

export default swaggerDocs;