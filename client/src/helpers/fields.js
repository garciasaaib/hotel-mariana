const email = {
  label: "Email Address",
  name: "email",
  type: "email",
}
const password = {
  label: "Password",
  name: "password",
  type: "password",
}
const newpassword = {
  label: "New Password",
  name: "newpassword",
  type: "password",
}
const firstname = {
  label: "First Name",
  name: "firstname",
  type: "text",
}
const lastname = {
  label: "Last Name",
  name: "lastname",
  type: "text",
}

const fields = {
  forgotpassword: email,
  login: [
    email, password
  ],
  register: [
    firstname, lastname,
    email, password, 
  ],
  newpassword: newpassword,
}

export default fields