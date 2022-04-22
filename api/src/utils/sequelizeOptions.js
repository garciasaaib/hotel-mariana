/** Helpers to sequelize
 * 
 * * pagination:
 * */
import {
  ELEMENT_PER_PAGE
} from '../config/constants'

export default {
  async pagination (page = 0, amount=10) {
    return {
      offset: page * amount,
      limit: amount
    }
  }
  // create(req, res) {},
  // store(req, res) {},
  // show(req, res) {},
  // edit(req, res) {},
  // update(req, res) {},
  // destroy(req, res) {},
}