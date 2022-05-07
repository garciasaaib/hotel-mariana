import * as Joi from "joi";
const email = Joi.string()
  .email('Must be a valid email')
  .max(255)
const password = Joi.string()
  .max(255)
  .min(8)
const name = Joi.string()
  .max(255)

const auth = {
  forgotpassword: Joi.object().shape({
    email: email
  }),
  login: Joi.object().shape({
    email, password
  }),
  register: Joi.object().shape({
    email, password, 
    firstname: name,
    lastname: name
  }),
  newpassword: Joi.object().shape({
    newpassword: password
  }),
}
export default {auth}