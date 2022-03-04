import morgan from 'morgan'

module.export = (req, res, next) => {
  morgan('dev')
  next()
}