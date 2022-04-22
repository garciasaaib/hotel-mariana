const { ValidationError } = require('sequelize');

function logErrors(error, req, res, next) {
  console.error(error)
  next(error)
}

function boomErrorHandler(error, req, res, next) {
  if (!error.isBoom) next(error)

  const { output } = error
  res.status(output.statusCode).send(output.payload)
}

function ormErrorHandler(error, req, res, next) {
  if (error instanceof ValidationError) {
    res.status(409).json({
      statusCode: 409,
      message: err.name,
      errors: err.errors
    });
  }
  next(err);
}

function errorHandler(error, req, res, next ) {
  res.status(500).json({
    message: error.message,
    stack: error.stack
  })
}


module.exports = {
  logErrors,
  errorHandler,
  boomErrorHandler,
  ormErrorHandler
}