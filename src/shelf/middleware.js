const { param, query, body } = require('express-validator')

const shelfIdValidationRules = () => {
  return [
    param('id')
      .exists()
      .trim()
      .isMongoId()
  ]
}

const addShelfValidationRules = () => {
  return [
    body('number')
      .exists()
      .trim()
      .isNumeric()
      .isLength({
        min: 3
      }),
    body('book')
      .exists()
      .isArray()
  ]
}

const updateShelfValidationRules = () => {
  return [
    param('id')
      .exists()
      .trim()
      .isMongoId(),
    body('number')
      .exists()
      .trim()
      .isNumeric()
      .isLength({
        min: 3
      }),
    body('book')
      .exists()
      .isArray()
  ]
}

const searchShelfValidationRules = () => {
  return [
    query('number')
      .optional()
      .trim()
      .isString()
      .isLength({
        min: 3
      })
  ]
}

module.exports = {
  shelfIdValidationRules,
  addShelfValidationRules,
  updateShelfValidationRules,
  searchShelfValidationRules
}
