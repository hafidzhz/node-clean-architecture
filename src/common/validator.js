const { validationResult } = require('express-validator')

const validate = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  let extractedErrors = {}
  errors.array().map(err => {
    extractedErrors = { ...extractedErrors, [err.param]: err.msg }
  })
  return res.status(422).json({
    status: 422,
    message: 'validation error',
    data: null,
    errors: extractedErrors
  })
}

module.exports = validate
