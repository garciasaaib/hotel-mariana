const boom = require('@hapi/boom')


exports.success = (req, res, next) => {
  // if(!req.body) throw boom.badRequest('DB comunication problem')
  res.status(req.status || 200).json({
    error: false,
    status: req.status || 200,
    message: req.message || "Request completed successfully",
    body: req.body,
    // status: req.response.status || 200,
    // message: req.response.message || 'OK',
    // body: req.response.body || null
  })
}

exports.error = (req, res, message = 'Internal server error', status = 500) => {
  res.status(status).send({
    error: true,
    status: status,
    body: message
  })
}