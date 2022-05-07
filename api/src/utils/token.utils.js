import token from 'jsonwebtoken';
import {secret, expires} from '../config/auth'

export default {
  async create(userData) {
    return token.sign({ ...userData }, secret,{ expiresIn: expires });
  }
}
