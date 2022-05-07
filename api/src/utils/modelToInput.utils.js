const modelToInput = (data) => Object.entries(data).map(([key, values]) => {
  let { comment, type } = values;
  return {
    name: key,
    label: comment,
    type: setType(key, type)
  }
})
export default modelToInput


// add new inputs if it is necessary
function setType(key, type) {
  switch (type) {
    case 'CHARACTER VARYING(255)':
      if (key === 'email') return type = 'email'
      if (key === 'password') return type = 'password'
      return type = 'text'
    case 'BIGINT':
      return type = 'number'
    default:
      return type = 'text'
  }
}
