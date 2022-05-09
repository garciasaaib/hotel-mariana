import { Router } from "express"
import roomServices from '../../services/room'
import { roomType } from '../../database/schemas'
import validatorHandler from '../../middlewares/validationHandler'
import {success} from '../../middlewares/errorHandler'
const app = Router()


app.get('/', async (req, res, next) => {
  try {
    req.body = await roomServices.index(req.query)
    success(req, res, next)
  } catch (error) { next(error) }
})



app.get('/types', async (req, res, next) => {
  try {
    req.body = await roomServices.types()
    success(req, res, next)
  } catch (error) { next(error) }
})

app.get('/types/:id', validatorHandler(roomType.details, 'params'), async (req, res, next) => {
    try {
      req.body = await roomServices.typesOne(req.params)
      success(req, res, next)
    } catch (error) { next(error) }})

export default app
