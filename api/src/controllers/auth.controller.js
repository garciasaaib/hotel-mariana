import bcrypt from 'bcrypt'
import { User } from '../models/index'
import tokenUtil from '../utils/token.utils'
import authConfig from '../config/auth'
import modelToInput from '../utils/modelToInput.utils'
import next from '../middlewares/errorHandler'

module.exports = {
  async create(req, res) {
    try {
      const {email, password} = await User.describe()
      const data = modelToInput({email, password})

      // response
      next.success(req, res, data, 200)
    } catch (error) { next.error(req, res, error.message, 500) }
  },
  async signin(req, res) {
    const { email, password } = req.body
    try {
      //validate fields
      // await User.validate({email, password}).catch(err => err)

      // get user credentials
      const { password: userpass, nickname, id } = await User.findOne({
        where: {
          email
        },
        attributes: ["password", "nickname"]
      })

      // validate password
      const validatedPassword = bcrypt.compareSync(password, userpass)
      if (!validatedPassword) throw new Error('Data do not fix')

      // create token
      const token = await tokenUtil.create({
        id,
        email,
        nickname,
      })


      // response
      next.success(req, res, {token, id, nickname, email}, 200)
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
      })
      if (userExists) throw new Error({message:"This email has been taken."})

      // create newUser
      password = await bcrypt.hash(password, Number.parseInt(authConfig.rounds));
      const nickname = email.replace(/(@).+/, '')
      const user = await User.create({
        password, nickname, email
      })

      // generate token
      const token = await tokenUtil.create({
        id: user.id,
        nickname: user.nickname,
        email: user.email
      })
      next.success(req, res, {token, id, nickname, email}, 200)

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
