import bcrypt from 'bcrypt'
import { User } from '../models/index'
import tokenUtil from '../utils/token.utils'
import authConfig from '../config/auth'
import modelToInput from '../utils/modelToInput.utils'
import jwt from 'jsonwebtoken'

module.exports = {
  async create(req, res) {
    try {
      const {email, password} = await User.describe()
      const schema = modelToInput({email, password})

      return res.status(200).json({ state: 'Success', schema })
      
    } catch (error) {
    }
  },
  async signin(req, res) {
    const { email, password } = req.body
    try {
      //validate fields
      await User.validate({email, password}).catch(err => err)

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
      return res.status(200).json({ state: 'Success', data: {token, id, nickname, email} })
    } catch (error) {
      return res.status(400).json({ error, message: "Wrong redentials" })
    }
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
      if (userExists) throw new Error("This email has been taken.")

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
      return res.status(200).json({ state: 'Success', data: {token, id, nickname, email} })
    } catch (error) { res.status(400).json({ state: 'Error', message: "wrong data" }) }
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
