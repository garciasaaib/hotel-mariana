import { Router } from "express";
import userRouter from './user.router'
import roomRouter from './room.router'
const router = Router()

import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
const swaggerDocument = YAML.load('./src/docs/swagger.yaml')

router.use('/docs', async (req, res, next) =>{
  swaggerDocument.host = req.get('host')
  req.swaggerDoc = swaggerDocument;
  next()
},swaggerUi.serve, swaggerUi.setup());

// normal routes
// router.use('/user', userRouter)
router.use('/room', roomRouter)

export default router