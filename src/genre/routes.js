const express = require('express')
const Router = express.Router()
const GenreController = require('./controller')
const GenreDatabase = require('./data_access/database')
const GenreRepository = require('./repository')
const {
  genreIdValidationRules,
  searchGenreValidationRules,
  addGenreValidationRules,
  updateGenreValidationRules
} = require('./middleware')
const validator = require('../common/validator')

const genreRoutes = () => {
  const database = new GenreDatabase()
  const repository = new GenreRepository(database)
  const router = Router
  const controller = GenreController(repository)

  router.route('/')
    .get(searchGenreValidationRules(), validator, controller.getGenre)
    .post(addGenreValidationRules(), validator, controller.addGenre)
  router.route('/:id')
    .get(genreIdValidationRules(), validator, controller.getGenreById)
    .put(updateGenreValidationRules(), validator, controller.updateGenre)
    .delete(genreIdValidationRules(), validator, controller.deleteGenre)
  return router
}

module.exports = genreRoutes
