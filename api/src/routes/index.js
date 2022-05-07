import { Router } from "express";


import employeeRouter from './employee.router'
import authRouter from './auth'
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
  // router.use('/employee', employeeRouter)
  router.use('/rooms', roomRouter)
  router.use('/auth', authRouter)

}