import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'
import { User } from '../models/index'
import tokenUtil from '../utils/token.utils'

module.exports = {
  async signin(req, res) {
    const { email, password } = req.body
    try {

      // get user credentials
      const {password: userpass, nickname, id} = await User.findOne({
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
        access: true
      })
      // response
      return res.status(200).json({token})
    } catch (error) {
      return res.status(400).json({ error, message: "Wrong redentials" })
    }
  },
  async signup(req, res) {
    res.json({ message: 'Estamos en signup' })
  },

  async validationToken(req, res) {
    const mtoken = req.params.mtoken
    /*
    jwt.verify(mtoken, 'Gydndgk557173$#120', function (error, token) {
      if (error) return res.status(400).send({ status: "error", message: error })
      else return res.status(200).send({ status: "ok", message: token })
    })
    */
    try {
      jwt.verify(mtoken, 'Gydndgk557173$#120')
    }
    catch (e) {
      console.log(e)
      if (e instanceof jwt.TokenExpiredError)
        return res.status(400).send({ status: "error", message: "token has expired" })
      if (e instanceof jwt.JsonWebTokenError)
        return res.status(400).send({ status: "error", message: "secret word is diferent" })
      return res.status(400).send({ status: "error", message: "general error" })
    }
    return res.status(200).send({ status: "ok", message: "token ok" })
  }
}