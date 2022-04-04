// swagger common
import swaggerUI from 'swagger-ui-express';

// swagger file yaml
import YAML from 'yamljs';
import express from 'express'

//swagger jsdocs
import swaggerJsDoc from "swagger-jsdoc";
import { options } from "./swaggerOptions";

const app = express()
const swaggerDocument = YAML.load('./src/docs/swagger.yaml');
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
console.log('Docs in /api-docs')

const specs = swaggerJsDoc(options);
app.use("/doc", swaggerUI.serve, swaggerUI.setup(specs));

export default app