import Sequelize from 'sequelize'
const { Employee } = require('../models')

export default {
  async index(req, res) {
    const employees = await Employee.find()
    res.status(200).json(employees)
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
