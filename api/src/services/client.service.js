import { User, Client, ClientType } from '../database/models/index'
import modelToInput from '../utils/modelToInput.utils'
import bcrypt from '../utils/bcryptMethods'
import authConfig from '../config/auth'
import boom from '@hapi/boom'
module.exports = {
  /**
   * 
   */
  async index() {
    const clientList = await Client.findAll({
      include: [
        { model: User, as: "user" }
      ]
    })
    return clientList
  },

  /**
   * 
   * @returns 
   */
  async create() {
    const { email, password, firstname, lastname, secondlastname } = await User.describe()
    return modelToInput({ email, password, firstname, lastname, secondlastname })
  },

  /**
   * 
   */
  async show({ id }) {
    const client = await Client.findOne({
      where: { id },
      include: [
        { model: User, as: "user" },
        { model: ClientType }
      ]
    })
    if(!client) throw boom.notFound('Client not found.')
    return client
  },
  /**
   * - Check if client exists
   * - Create client
   * @param {*} body 
   * @returns 
   */
  async store(body) {
    console.log(body)
    const exsistClient = await Client.findOne({
      where: { id_user: body.id }
    })
    if (exsistClient) throw boom.badRequest('This account already exists.')

    
    const newClient = await Client.create({
      id_user: body.id
    })
    return body
  }
}
