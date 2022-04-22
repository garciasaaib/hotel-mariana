import Sequelize from 'sequelize'
import { Room, Room_type } from '../models'
import options from '../utils/sequelizeOptions'

export default {
  async index(req, res, next) {
    try {
      const path = req.path.slice(1) || false
      const { page = 0 } = req.query;

      let roomList
      if (path === 'types') roomList = await Room_type.findAll()
      else {
        const optionsPagination = await options.pagination(page)
        roomList = await Room.findAndCountAll({
          ...optionsPagination
        })
      }
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

