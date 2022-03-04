import Sequelize from 'sequelize'
const {User} = require('../models')

export default {
  create(req, res) {
    return user.create({

    })
  },
  async list(req, res) {
    // return res.send({ status: '200', data: 'result' })
    return await User.findAll({}).then( result => res.send({ status: '200', data: result }))
    // res.send({ status: '200', data: 'result' })
  },
}
