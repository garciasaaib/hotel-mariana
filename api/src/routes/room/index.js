import { Router } from "express"
import roomServices from '../../controllers/room.controller'
const { roomType } = require('../../database/schemas')
const validatorHandler = require('../../middlewares/validationHandler')
const app = Router()


app.get('/', async (req, res, next) => {
  try {
    req.body = await roomServices.index(req.query)
    next()
  } catch (error) { next(error) }
})



app.get('/types', async (req, res, next) => {
  try {
    req.body = await roomServices.types()
    next()
  } catch (error) { next(error) }
})

app.get('/types/:id',
  validatorHandler(roomType.details, 'params'),
  async (req, res, next) => {
    try {
      req.body = await roomServices.typesOne(req.params)
      next()
    } catch (error) { next(error) }
  })

export default app
