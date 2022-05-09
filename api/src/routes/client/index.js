import { Router } from 'express'
import clientServices from '../../services/client'
import authController from '../../services/auth'
import mailerController from '../../services/mailer'
import validatorHandler from '../../middlewares/validationHandler';
import { client, auth } from '../../database/schemas'
import {success} from '../../middlewares/errorHandler'

const router = Router()

// get all clients
router.get('/', async (req, res, next) => {
  try {
    req.body = await clientServices.index()
    success(req, res, next)
  } catch (error) { next(error) }
})

// get client details
router.get('/:id', async (req, res, next) => {
  try {
    req.body = await clientServices.show(req.params)
    success(req, res, next)
  } catch (error) { next(error) }
})

// inputs to create a client
router.get('/create', async (req, res, next) => {
  try {
    req.body = await clientServices.create()
    success(req, res, next)
  } catch (error) { next(error) }
})

// login as client
router.post('/login',
  validatorHandler(auth.login, 'body'),
  async (req, res, next) => {
    try {
      req.body = await authController.login(req.body, 1)
      success(req, res, next)
    } catch (error) { next(error) }
  }
)

// create a new client
router.post('/register',
  validatorHandler(client.new, 'body'),
  async (req, res, next) => {
    try {
      req.body = await authController.register(req.body)
      req.body = await clientServices.store(req.body)
      console.log(req.body)
      // await mailerController.verifyEmail(req.body)
      // req.message = 'New user created. Check your email and verify your.'
      success(req, res, next)
    } catch (error) { next(error) }
  }
)

router.post('/forgotpassword',
  validatorHandler(auth.forgotpassword, 'body'),
  async (req, res, next) => {
    try {
      req.body = await authController.forgotpassword(req.body)
      next()
    } catch (error) { next(error) }
  })

  router.put('/newpassword',
  // validatorHandler(auth.forgotpassword, 'body'),
  async (req, res, next) => {
    try {
      req.body = await authController.newpassword(req.body)
      next()
    } catch (error) { next(error) }
  })
// router.get('/token', authController.token)
// router.get('/validatetoken/:mtoken', authController.validationToken)
// router.post('/signin', authController.signin)
// router.post('/signup', authController.signup)
// router.post('/verify', authController.verify)
// 
module.exports = router