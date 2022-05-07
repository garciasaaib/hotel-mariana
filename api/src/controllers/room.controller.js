import Sequelize from 'sequelize'
import { Room, RoomType, RoomPhoto } from '../models'
import options from '../utils/sequelizeOptions'

export default {
  async index(req, res, next) {
    try {
      const { page = 0, amount = 10, sort, role, search } = req.query;

      let { count, rows } = await Room.findAndCountAll({
        where: {},
        include: {
          model: RoomType,
          attributes: {
            exclude: ['createdAt', 'updatedAt']
          }
        },
        attributes: {
          exclude: ['createdAt', 'updatedAt']
        },
        ...(options.pageLimit(page, amount, sort)),
      })
      const pagination = options.paginate(count, page, amount)
      req.body = { ...pagination, count, page, rows }


      next()
    } catch (error) { next(error) }
  },



  async type(req, res, next) {
    try {
      req.body = await RoomType.findAll({
        attributes: {
          include: [[Sequelize.fn("COUNT", Sequelize.col("Rooms")), "Rooms_count"]] 
        },
        include: [{
          model: RoomPhoto,
          attributes: { exclude: ['createdAt', 'updatedAt']}
        },
        {
          model: Room,
          attributes: []
        }],
        group: ['RoomType.id', 'RoomPhotos.id']
        // attributes: ['roomAmount', [sequelize.fn('sum', sequelize.col('Rooms')), 'total']],
        // group: ['Rooms.id'],
        // raw: true,
      })
      next()
    } catch (error) { next(error) }
  },
  // create(req, res) {},
  // store(req, res) {},
  // show(req, res) {},
  // edit(req, res) {},
  // update(req, res) {},
  // destroy(req, res) {},
}

