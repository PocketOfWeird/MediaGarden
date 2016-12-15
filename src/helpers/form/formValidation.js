export const validateValue = (value, type) => {
  switch (type) {
    default:
      return ''
  }
}

export const validateForm = (values, requiredFields) => {
  let errors = {}

  requiredFields.forEach(field => {

    const validationError = validateValue(values[field], field)
    if (validationError !== '') {
      errors[field] = validationError
    }

    if (!values[field]) {
      errors[field] = 'Required'
    }

  })

  return errors
}
