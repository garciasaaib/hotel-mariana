import { Router} from "express"
import userController from '../controllers/user.controller'

const app = Router()

app.get('/', userController.index)
app.post('/', userController.store)
app.put('/', userController.edit)

export default app