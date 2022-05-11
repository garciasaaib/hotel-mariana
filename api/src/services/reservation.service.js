import bcrypt from '../utils/bcryptMethods'
import { Reservation } from '../database/models/index'
import tokenUtil from '../utils/token.utils'
import authConfig from '../config/auth'
import boom from '@hapi/boom'
import modelToInput from '../utils/modelToInput.utils'
import clientController from './client.service'


module.exports = {
  /** auth.login
   * - Find all the existent reservations for this client and its associated tables
   * @param {*} body - request body
   * @param {*} role - role
   * @returns 
   */
  async index() {
    const reservations = Reservation.findAll({
      
    })
    return reservations
  },

  async show({id}) {
    const reservation = Reservation.findOne({ 
      where: { id }
    })
    return reservation
  },

  async store({body}) {
    const newReservation = Reservation.create(body)
    return newReservation
  }


}

