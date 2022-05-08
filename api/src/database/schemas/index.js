const Joi = require('joi');
const email = Joi.string().email()
const password = Joi.string().max(255).min(8)
const name = Joi.string().max(255)


const id = Joi.number().positive().integer();


// export const auth = {
//   forgotpassword: Joi.object({
//     email: email
//   }),
//   login: Joi.object({
//     email, password
//   }),
//   register: Joi.object({
//     email, password, 
//     firstname: name,
//     lastname: name
//   }),
//   newpassword: Joi.object({
//     newpassword: password
//   }),
// }
const roomType = {
  details: Joi.object({
    id: id.required(),
  })
}

const client = {
  new: Joi.object({
    email: email.required(),
    password: password.required(),
    firstname: name.required(),
    lastname: name.required(),
    secondlastname: name.required(),
  }),
  update: Joi.object({
    // email: email.required(),
    // password: password.required(),
    firstname: name.required(),
    lastname: name.required(),
    secondlastname: name.required(),
  }),
}

const auth = {
  login: Joi.object({
    email: email.required(),
    password: password.required()
  }),
  forgotpassword: Joi.object({
    email: email.required(),
  }),
}

  module.exports = { roomType, auth, client}