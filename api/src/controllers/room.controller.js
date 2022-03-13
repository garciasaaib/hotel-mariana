import Sequelize from 'sequelize'
const { Room } = require('../models')

export default {
  async index(req, res, next) {
    try {
      const response = await Room.findAll()
      res.status(200).json({ response })
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  // create(req, res) {},
  // store(req, res) {},
  // show(req, res) {},
  // edit(req, res) {},
  // update(req, res) {},
  // destroy(req, res) {},
}

