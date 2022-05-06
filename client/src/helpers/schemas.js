import * as Yup from "yup";
const email = Yup.string()
  .required('Email is required')
  .email('Must be a valid email')
  .max(255)
const password = Yup.string()
  .max(255)
  .min(8)
  .required('Password is required')
const name = Yup.string()
  .max(255)
  .required('This field is required')

const schemas = {
  forgotpassword: Yup.object().shape({
    email: email
  }),
  login: Yup.object().shape({
    email, password
  }),
  register: Yup.object().shape({
    email, password, 
    firstname: name,
    lastname: name
  }),
  newpassword: Yup.object().shape({
    newpassword: password
  }),
}
export default schemas