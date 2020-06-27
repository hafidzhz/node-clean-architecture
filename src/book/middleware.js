const { param, query, body } = require('express-validator')

const bookIdValidationRules = () => {
  return [
    param('id')
      .exists()
      .trim()
      .isMongoId()
  ]
}

const addBookValidationRules = () => {
  return [
    body('title')
      .exists()
      .trim()
      .isString()
      .isLength({
        min: 5
      }),
    body('genre')
      .exists()
      .trim()
      .isMongoId(),
    body('author')
      .exists()
      .trim()
      .isLength({
        min: 5
      }),
    body('release')
      .exists()
      .trim()
      .isString()
      .isLength({
        min: 5
      })
  ]
}

const updateBookValidationRules = () => {
  return [
    param('id')
      .exists()
      .trim()
      .isMongoId(),
    body('title')
      .trim()
      .isString()
      .isLength({
        min: 5
      }),
    body('genre')
      .trim()
      .isMongoId(),
    body('author')
      .trim()
      .isString()
      .isLength({
        min: 3
      }),
    body('release')
      .trim()
      .isString()
      .isLength({
        min: 5
      })
  ]
}

const searchBookValidationRules = () => {
  return [
    query('name')
      .optional()
      .trim()
      .isString()
      .isLength({
        min: 3
      })
  ]
}

module.exports = {
  bookIdValidationRules,
  addBookValidationRules,
  updateBookValidationRules,
  searchBookValidationRules
}
