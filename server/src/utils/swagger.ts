import swaggerUi from "swagger-ui-express";
import swaggerDocument from '../../swagger3.json'

const swaggerDoc1 = swaggerUi.generateHTML(swaggerDocument, {});

// API Docs initialization using Swagger

function swaggerDocs(app: Express.Application) {

  app.use('/docs', swaggerUi.serveFiles(swaggerDocument, {}))
  app.get('/docs', (req, res) => { res.send(swaggerDoc1) });

  // Docs in JSON format
  app.get("/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerDocument);
  });

  console.log("API docs running...")

}

export default swaggerDocs;