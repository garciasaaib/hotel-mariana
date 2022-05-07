import Sequelize from 'sequelize'
import { Room, RoomType, RoomPhoto } from '../models'
import options from '../utils/sequelizeOptions'

export default {
  async index(req, res, next) {
    try {
      const { page = 0, amount = 10, sort, role, search } = req.query;
      // const optionsPagination = await options.pagination(page)
      // let roomList = await Room.findAndCountAll({
      //   ...optionsPagination
      // })

      let {count, rows} = await Room.findAndCountAll({
        where: {

        },
        include: [
          { model: RoomType }
        ],
        ...(await options.pageLimit(page, amount, sort))
      })
      const pagination = await options.paginate(count, page, amount)
      const response = { ...pagination, count, page, rows }


      res.status(200).json({ response })
    } catch (error) { next(error) }
  },



  async type(req, res, next) {
    try {
      let response = await RoomType.findAll({
        include: [
          { model: RoomPhoto },
          { model: Room },
        ]
      })
      res.status(200).json({ response })
    } catch (error) { next(error) }
  },
  // create(req, res) {},
  // store(req, res) {},
  // show(req, res) {},
  // edit(req, res) {},
  // update(req, res) {},
  // destroy(req, res) {},
}

