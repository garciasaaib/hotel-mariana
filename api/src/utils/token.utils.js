import jwt from 'jsonwebtoken';
import {secret, expires} from '../config/auth'

export default {
  async create(userData) {
    return jwt.sign({ ...userData }, secret,{ expiresIn: expires });
  },
  async generateLink(userData){
    const token = jwt.sign({ ...userData }, secret,{ expiresIn: '10m' });
    return `http://localhost:3000/new-password/${token}`
  }
}
