import Sequelize from 'sequelize'
import { Room, RoomType, RoomPhoto } from '../database/models'
import options from '../utils/sequelizeOptions'
const boom = require('@hapi/boom')

export default {
  async index(query) {
    const { page = 0, amount = 10, sort, role, search } = query;

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
    if (!rows.length) throw boom.notFound('Rooms not found');

    const pagination = options.paginate(count, page, amount)
    return { ...pagination, count, page, rows }
  },


  async types() {
    const roomTypes = await RoomType.findAll({
      attributes: {
        include: [[Sequelize.fn("COUNT", Sequelize.col("Rooms")), "Rooms_count"]]
      },
      include: [{
        model: RoomPhoto,
        attributes: { exclude: ['createdAt', 'updatedAt'] }
      },
      {
        model: Room,
        attributes: []
      }],
      group: ['RoomType.id', 'RoomPhotos.id']
    })
    if (!roomTypes.length) throw boom.notFound('Room types not found');
    // throw boom.notFound('product not sfound');
    return roomTypes
  },

  async typesOne(params) {
    const { id } = params
    const roomType = await RoomType.findOne(
      {
        where: { id },
        attributes: {
          include: [[Sequelize.fn("COUNT", Sequelize.col("Rooms")), "Rooms_count"]]
        },
        include: [{
          model: RoomPhoto,
          attributes: { exclude: ['createdAt', 'updatedAt'] }
        },
        {
          model: Room,
          attributes: []
        }],
        group: ['RoomType.id', 'RoomPhotos.id']
      })
    if (!roomType) throw boom.notFound('Room type not found');
    return roomType
  }
  // create(req, res) {},
  // store(req, res) {},
  // show(req, res) {},
  // edit(req, res) {},
  // update(req, res) {},
  // destroy(req, res) {},
}

