import bcrypt from '../utils/bcryptMethods'
import { User, Client } from '../database/models/index'
import tokenUtil from '../utils/token.utils'
import authConfig from '../config/auth'
import boom from '@hapi/boom'
import modelToInput from '../utils/modelToInput.utils'
import clientController from './client.controller'


module.exports = {
  async create() {
    const { email, password, firstname, lastname, secondlastname } = await User.describe()
    return modelToInput({ email, password, firstname, lastname, secondlastname })
  },


  async login(body, role) {
    // TODO: check that email
    const user = await User.findOne({
      where: { email: body.email },
    })
    if (!user) throw boom.badRequest('Password or email does not match: email')

    // TODO: verify password
    const match = await bcrypt.verifyPassword(body.password, user.password);
    if (!match) throw boom.badRequest('Password or email does not match')

    // TODO: generate token
    const token = await tokenUtil.create({
      id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
      secondlastname: user.secondlastname,
      email: user.email,
      isValidEmail: user.isValidEmail,
      isValidPhone: user.isValidPhone,
      role: role,
    })
    return { token }
  },


  async register(body) {
    // TODO: Check if user exists
    const userExists = await User.findOne({ where: { email: body.email } })
    if (userExists) return userExists

    // TODO: generate credentials
    body.password = await bcrypt.hashPass(body.password, Number.parseInt(authConfig.rounds));
    body.username = body.email.replace(/(@).+/, '')
    const newUser = await User.create(body)
    if(!newUser) throw boom.badRequest('Request Error')
    return newUser
  },


  async forgotpassword(body) {
    const user= await User.findOne({ where: { email: body.email } })
    const linkToken = await tokenUtil.generateLink({ id: user.id, email: user.email })
    return linkToken
  },

  async newpassword(newpassword, token) {
    const user= await User.findOne({ where: { email: body.email } })
    const linkToken = await tokenUtil.generateLink({ id: user.id, email: user.email })
    return linkToken
  }
}

