import { Router } from "express"
import employeeController from '../../controllers/employee.controller'

const app = Router()

app.get('/', employeeController.index)
// app.post('/', employeeController.store)
// app.put('/', employeeController.edit)

export default app