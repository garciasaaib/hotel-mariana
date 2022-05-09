import { Router } from "express";


import employeeRouter from './employee'
import clientRouter from './client'
import roomRouter from './room'



import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
const swaggerDocument = YAML.load('./src/docs/swagger.yaml')

// router

export default (app) => {
  const router = Router()

  // versions
  app.use('/api/v1/', router)


  // docs routes
  router.use('/docs', async (req, res, next) => {
    swaggerDocument.host = req.get('host')
    req.swaggerDoc = swaggerDocument;
    next()
  }, swaggerUi.serve, swaggerUi.setup());

  // normal routes
  router.use('/employees', employeeRouter)
  router.use('/rooms', roomRouter)
  router.use('/clients', clientRouter)

}