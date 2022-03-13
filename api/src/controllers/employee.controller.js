import Sequelize from 'sequelize'
const { User } = require('../models')

export default {
  async index(req, res) {
    res.send({ status: '200', data: "show" })
  },
  async create(req, res) {
    res.send({ status: '200', data: "show" })
  },
  async store(req, res) {
    res.send({ status: '200', data: "store" })
  },
  async show(req, res) {
    res.send({ status: '200', data: "show" })
  },
  async edit(req, res) {
    res.send({ status: '200', data: "edit" })
  },
  // async update(req, res) {},
  // async destroy(req, res) {},

}
