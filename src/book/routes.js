const express = require('express')
const Router = express.Router()
const BookController = require('./controller')
const BookDatabase = require('./data_access/database')
const BookRepository = require('./repository')
const {
  bookIdValidationRules,
  searchBookValidationRules,
  addBookValidationRules,
  updateBookValidationRules
} = require('./middleware')
const validator = require('../common/validator')

const bookRoutes = () => {
  const database = new BookDatabase()
  const repository = new BookRepository(database)
  const router = Router
  const controller = BookController(repository)

  router.route('/')
    .get(searchBookValidationRules(), validator, controller.getBook)
    .post(addBookValidationRules(), validator, controller.addBook)
  router.route('/:id')
    .get(bookIdValidationRules(), validator, controller.getBookById)
    .put(updateBookValidationRules(), validator, controller.updateBook)
    .delete(bookIdValidationRules(), validator, controller.deleteBook)
  return router
}

module.exports = bookRoutes
