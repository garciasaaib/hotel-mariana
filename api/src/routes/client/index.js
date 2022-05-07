import {Router} from 'express'
import authController from '../../controllers/auth.controller'
// import validatorHandler from '../../middlewares/validationHandler';
// import {auth} from '../../database/schemas'
const router = Router()


// router.get('/token', authController.token)
// router.get('/validatetoken/:mtoken', authController.validationToken)
router.get('/create', authController.create)
// router.post('/signin', authController.signin)
// router.post('/signup', authController.signup)
// router.post('/verify', authController.verify)
// 
module.exports = router