import bcrypt from 'bcrypt'
import { User } from '../models/index'
import tokenUtil from '../utils/token.utils'
import authConfig from '../config/auth'
import modelToInput from '../utils/modelToInput.utils'
// import next from '../middlewares/errorHandler'

module.exports = {
  async create(req, res, next) {
    try {
      const { email, password, firstname, lastname, secondlastname } = await User.describe()
      req.body = modelToInput({ email, password, firstname, lastname, secondlastname  })
      req.message = "Request successfuly done."
      req.status = 202
      next()
    } catch (error) { next(error) }
  },




  
  async signin(req, res) {
    let { email, password: pass } = req.body
    let data = {}
    try {
      // validate data

      // find user by email
      const user = await User.findOne({
        where: {
          email: email
        },
        attributes: ["password", "nickname"]
      })
      const { password, nickname } = user

      // compare password
      console.log(password, pass);
      const match = await bcrypt.compare(pass, password)
      if (!match) throw new Error('Data do not fix')

      // create token
      const token = await tokenUtil.create({
        email,
        nickname,
      })
      data = { nickname, email, token }

      // response
      next.success(req, res, data, 200)
    } catch (error) { next.error(req, res, error.message, 500) }
  },
  async signup(req, res) {
    let { email, password } = req.body

    try {

      // check that email
      const userExists = await User.findOne({
        where: {
          email
        }
      }).catch(err => {throw new Error({ message: "This email has been taken." })})
      // if (userExists) throw new Error()

      // create newUser
      password = await bcrypt.hash(password, Number.parseInt(authConfig.rounds));
      const nickname = email.replace(/(@).+/, '')
      const user = await User.create({
        password, nickname, email
      })

      // create
      console.log(user);

      // generate token
      const token = await tokenUtil.create({
        id: user.id,
        nickname: user.nickname,
        email: user.email
      })

      // responses
      next.success(req, res, { token, id, nickname, email }, 200)
    } catch (error) { next.error(req, res, error.message, 500) }
  },
  async verify(req, res) {
    let token
    req.hasOwnProperty('method')
      ? token = req.body.token
      : token = req.params.token
    console.log(token);
    // try {
    //   await jwt.verify(token, authConfig.secret)
    //   return res.status(200).send({ status: "ok", message: "token ok" })
    // }
    // catch (e) {
    //   if (e instanceof jwt.TokenExpiredError)
    //     return res.status(400).send({ status: "error", message: "token has expired" })
    //   if (e instanceof jwt.JsonWebTokenError)
    //     return res.status(400).send({ status: "error", message: "secret word is diferent" })
    //   return res.status(400).send({ status: "error", message: "general error" })
    // }
  }
}
