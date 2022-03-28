import jwt from 'jsonwebtoken';
import authConfig from '../config/auth'

export default {
  async create(tokenData) {
    const token = jwt.sign(
      { ...tokenData, access: true },
      authConfig.secret,
      { expiresIn: authConfig.expires }
    );
    return token
  }
}