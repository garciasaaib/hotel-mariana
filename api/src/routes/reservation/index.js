import { Router } from 'express'
import reservationServices from '../../services/reservation.service'
// import Service from '../../services/auth.service'
import mailerServices from '../../services/mailer.service'
import validatorHandler from '../../middlewares/validationHandler';
import {  } from '../../database/schemas'
import {success} from '../../middlewares/errorHandler'

const router = Router()

// get all reservations
router.get('/', async (req, res, next) => {
  try {
    req.body = await reservationServices.index()
    success(req, res, next)
  } catch (error) { next(error) }
})

// create a reservation
router.post('/', async (req, res, next) => {
  try {
    req.body = await reservationServices.show(req.params)
    success(req, res, next)
  } catch (error) { next(error) }
})

// update a reservation
router.put('/:id', async (req, res, next) => {
  try {
    req.body = await reservationServices.show(req.params)
    success(req, res, next)
  } catch (error) { next(error) }
})

// login as client
router.get('/:id',
  async (req, res, next) => {
    try {
      req.body = await authService.login(req.body, 1)
      success(req, res, next)
    } catch (error) { next(error) }
  }
)

// // login as client
// router.post('/show',
//   validatorHandler(auth.login, 'body'),
//   async (req, res, next) => {
//     try {
//       req.body = await authService.login(req.body, 1)
//       success(req, res, next)
//     } catch (error) { next(error) }
//   }
// )

// create a new client
// router.post('/register',
//   validatorHandler(client.new, 'body'),
//   async (req, res, next) => {
//     try {
//       req.body = await authService.register(req.body)
//       req.body = await reservationServices.store(req.body)
//       // TODO: send email to confirm
//       // await mailerServices.verifyEmail(req.body)
//       req.body = 'OK'
//       req.message = 'New client created successfully'
//       success(req, res)
//     } catch (error) { next(error) }
//   }
// )

// router.post('/forgotpassword',
//   validatorHandler(auth.forgotpassword, 'body'),
//   async (req, res, next) => {
//     try {
//       req.body = await authService.forgotpassword(req.body)
//       next()
//     } catch (error) { next(error) }
//   })

//   router.put('/newpassword',
//   // validatorHandler(auth.forgotpassword, 'body'),
//   async (req, res, next) => {
//     try {
//       req.body = await authService.newpassword(req.body)
//       next()
//     } catch (error) { next(error) }
//   })
// router.get('/token', authService.token)
// router.get('/validatetoken/:mtoken', authService.validationToken)
// router.post('/signin', authService.signin)
// router.post('/signup', authService.signup)
// router.post('/verify', authService.verify)

// inputs to create a client
// router.get('/create', async (req, res, next) => {
//   try {
//     req.body = await reservationServices.create()
//     success(req, res, next)
//   } catch (error) { next(error) }
// })

module.exports = router