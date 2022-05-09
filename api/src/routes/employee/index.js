import { Router } from "express"
import employeeController from '../../services/employee'
import {success} from '../../middlewares/errorHandler'


const app = Router()

app.get('/', async (req, res, next) => {
  try {
    await employeeController.index()
    success(req, res, next)
  } catch (error) {
    next(error)
  }
})
// app.post('/', employeeController.store)
// app.put('/', employeeController.edit)

export default app