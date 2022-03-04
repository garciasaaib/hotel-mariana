import { Router} from "express"
import userController from '../controllers/user.controller'

const app = Router()
app.get('/', userController.list)
export default app