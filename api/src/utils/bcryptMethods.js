const bcrypt = require('bcrypt');
const authConfig = require('../config/auth')
const Boom = require('@hapi/boom')

module.exports = {
  async hashPass(str) {
    const password1 = await bcrypt.hashSync(str, Number.parseInt(authConfig.rounds))
    return password1
  },
  async verifyPassword(myPassword, hashedPassword) {
    const isMatch = await bcrypt.compare(myPassword, hashedPassword);
    if (!isMatch) throw Boom.unauthorized('Incorrect username or password.')
    return isMatch
  },
}