import bcrypt from '../utils/bcryptMethods'
import { User, Client } from '../database/models/index'
import tokenUtil from '../utils/token.utils'
import authConfig from '../config/auth'
import boom from '@hapi/boom'
import modelToInput from '../utils/modelToInput.utils'
import clientController from './client'


module.exports = {
  /** auth.login
   * - Find that exists a user with that email
   * - Match body password with userpassword
   * - Create the token with data and role in it
   * @param {*} body - request body
   * @param {*} role - role
   * @returns 
   */
  async login(body, role) {
    const user = await User.findOne({
      where: { email: body.email },
    })
    if (!user) throw boom.badRequest('Password or email does not match: email')
    const match = await bcrypt.verifyPassword(body.password, user.password);
    if (!match) throw boom.badRequest('Password or email does not match')
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
    const userExists = await User.findOne({ where: { email: body.email } })
    if (userExists) return userExists
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

