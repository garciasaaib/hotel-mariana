import { Router } from "express";
import employeeRouter from './employee.router'
import authRouter from './auth.router'
import roomRouter from './room.router'
const router = Router()

import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
const swaggerDocument = YAML.load('./src/docs/swagger.yaml')

// docs routes
router.use('/docs', async (req, res, next) =>{
  swaggerDocument.host = req.get('host')
  req.swaggerDoc = swaggerDocument;
  next()
},swaggerUi.serve, swaggerUi.setup());

// normal routes
router.use('/employee', employeeRouter)
router.use('/room', roomRouter)
router.use('/auth', authRouter)

export default router