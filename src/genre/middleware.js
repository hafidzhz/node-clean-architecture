const { param, query, body } = require('express-validator')

const genreIdValidationRules = () => {
  return [
    param('id')
      .exists()
      .trim()
      .isMongoId()
  ]
}

const addGenreValidationRules = () => {
  return [
    body('name')
      .exists()
      .trim()
      .isString()
      .isLength({
        min: 5
      })
  ]
}

const updateGenreValidationRules = () => {
  return [
    param('id')
      .exists()
      .trim()
      .isMongoId(),
    body('name')
      .exists()
      .trim()
      .isString()
      .isLength({
        min: 5
      })
  ]
}

const searchGenreValidationRules = () => {
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
  genreIdValidationRules,
  addGenreValidationRules,
  updateGenreValidationRules,
  searchGenreValidationRules
}
