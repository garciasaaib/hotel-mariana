const modelToInput = (data) => Object.entries(data).map(([key, values]) => {
    let { comment, type } = values;
    let validate;

    // manage key
    type = ['email', 'password'].some((item) => item === 'email') ? key : 'text';

    // manage validations
    switch (key) {
      case 'email':
        validate = (value) => {
          if (value === undefined || value === '') return 'Required';
          if (!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(value)) return;
          return '';
        };
        break;
      case 'password':
        validate = (data) => {
          if (data === undefined || data === '') return 'Required';
          if (data.length < 8) return 'Must be 8 or more characters';
          return '';
        };
        break;
      default:
        break;
    }

    // frontend values
    return {
      name: key,
      label: comment,
      type,
      // validate,
    }
  })

export default modelToInput