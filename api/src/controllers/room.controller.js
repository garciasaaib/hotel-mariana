import Sequelize from 'sequelize'
const { Room } = require('../models')

export default {
  async index(req, res, next) {
    await Room.findAll()
    .then(roomList =>  res.status(200).json({ roomList }))
  },
  // create(req, res) {},
  // store(req, res) {},
  // show(req, res) {},
  // edit(req, res) {},
  // update(req, res) {},
  // destroy(req, res) {},
}

