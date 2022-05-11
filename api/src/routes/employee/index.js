import { Router } from "express"
import employeeService from '../../services/employee.service'
import {success} from '../../middlewares/errorHandler'


const app = Router()

app.get('/', async (req, res, next) => {
  try {
    await employeeService.index()
    success(req, res, next)
  } catch (error) {
    next(error)
  }
})
// app.post('/', employeeService.store)
// app.put('/', employeeService.edit)

export default app