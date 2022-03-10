import { Router } from "express";
import userRouter from './user.router'
const router = Router()

import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
const swaggerDocument = YAML.load('./src/docs/swagger.yaml')

router.use('/docs', async (req, res, next) =>{
  swaggerDocument.host = req.get('host')
  req.swaggerDoc = swaggerDocument;
  next()
},swaggerUi.serve, swaggerUi.setup());

router.use('/user', userRouter)
router.use('/rooms',  (req, res, next) =>{
  res.json({holo: 'holo'})
})

export default router