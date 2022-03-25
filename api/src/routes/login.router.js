import {Router} from 'express'
import loginController from '../controllers/login.controller'
const router = Router()


// router.get('/login', loginController.Login)
// router.get('/prueba', loginController.Prueba)
router.get('/token', loginController.token)
router.get('/validatetoken/:mtoken', loginController.validationToken)

module.exports = router