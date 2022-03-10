import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import express from 'express'

const app = express()
const swaggerDocument = YAML.load('./src/docs/swagger.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
console.log('Docs in /api-docs')
export default app