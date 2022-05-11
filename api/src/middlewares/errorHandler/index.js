

exports.success = (req, res, next) => {
  res.status(req.status || 200).json({
    error: false,
    status: req.status || 200,
    message: req.message || "Request completed successfully",
    body: req.body,

  })
}

exports.error = (req, res, message = 'Internal server error', status = 500) => {
  res.status(status).send({
    error: true,
    status: status,
    body: message
  })
}