/** Helpers to sequelize
 * 
 * * pagination:
 * */
import {
  ELEMENT_PER_PAGE
} from '../config/constants'

export default {
  pageLimit (page = 0, amount=10, sort="") {
    let order = sort.toUpperCase()
    order === order === 'DESC' ? 'DESC': order === "ASC" ? "ASC" : null
    return {
      offset: page * amount, 
      limit: amount, 
      distinct: true
    }
  },
  paginate: (rows, page = 0, amount=10) =>{
    const max = (rows/amount)*1
    const next = page*1 + 1
    const prev = page*1 - 1
    return {
      next: page < max ? next : null,
      prev: page ? prev : null
    }
  },
  noTimestamps: {exclude: ['createdAt', 'updatedAt']},
  filter (search, role) {
    let response = {}
    if(search) response.name = { [Op.iLike]: `%${search}%` }
    if(role) response.role = role
    return response
  },


  // create(req, res) {},
  // store(req, res) {},
  // show(req, res) {},
  // edit(req, res) {},
  // update(req, res) {},
  // destroy(req, res) {},
}