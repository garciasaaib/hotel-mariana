import Sequelize from 'sequelize'
import { Room, Room_type } from '../models'
import options from '../utils/sequelizeOptions'

export default {
  async index(req, res, next) {
    try {
      const { page } = req.query;
      // const optionsPagination = await options.pagination(page)
      // let roomList = await Room.findAndCountAll({
      //   ...optionsPagination
      // })

      let roomList = await Room.findAndCountAll({
        include: [
          {model: Room_type, as: "type"}
        ]
      })
      res.status(200).json({ roomList }) 
    } catch (error) { next(error) }
  },
  async type(req, res, next) {
    try {
      let roomList = await Room_type.findAll()
      res.status(200).json({ roomList })
    } catch (error) { next(error) }
  },
  // create(req, res) {},
  // store(req, res) {},
  // show(req, res) {},
  // edit(req, res) {},
  // update(req, res) {},
  // destroy(req, res) {},
}

