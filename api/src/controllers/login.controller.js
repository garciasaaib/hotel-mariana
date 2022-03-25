const jwt = require('jsonwebtoken');








module.exports = {
  async token(req, res) {
    const token = jwt.sign({ user_id: 1, name: "adrian", access: true }, 'Gydndgk557173$#120', { expiresIn: 60 })
    res.status(200).json({token})
  },
  async validationToken(req, res) {
    const mtoken = req.params.mtoken
    /*
    jwt.verify(mtoken, 'Gydndgk557173$#120', function (error, token) {
      if (error) return res.status(400).send({ status: "error", message: error })
      else return res.status(200).send({ status: "ok", message: token })
    })
    */
    try {
      jwt.verify(mtoken, 'Gydndgk557173$#120')
    }
    catch (e) {
      console.log(e)
      if (e instanceof jwt.TokenExpiredError)
        return res.status(400).send({ status: "error", message: "token has expired" })
      if (e instanceof jwt.JsonWebTokenError)
        return res.status(400).send({ status: "error", message: "secret word is diferent" })
      return res.status(400).send({ status: "error", message: "general error" })
    }
    return res.status(200).send({ status: "ok", message: "token ok" })
  }
}