import { Router } from "express"
import roomController from '../controllers/room.controller'

const app = Router()
  app.get('/', roomController.index)
  app.get('/types', roomController.index)

export default app
