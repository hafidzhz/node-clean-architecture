const express = require('express')
const Router = express.Router()
const ShelfController = require('./controller')
const ShelfDatabase = require('./data_access/database')
const ShelfRepository = require('./repository')
const {
  shelfIdValidationRules,
  searchShelfValidationRules,
  addShelfValidationRules,
  updateShelfValidationRules
} = require('./middleware')
const validator = require('../common/validator')

const shelfRoutes = () => {
  const database = new ShelfDatabase()
  const repository = new ShelfRepository(database)
  const router = Router
  const controller = ShelfController(repository)

  router.route('/')
    .get(searchShelfValidationRules(), validator, controller.getShelf)
    .post(addShelfValidationRules(), validator, controller.addShelf)
  router.route('/:id')
    .get(shelfIdValidationRules(), validator, controller.getShelf)
    .put(updateShelfValidationRules(), validator, controller.updateShelf)
    .delete(shelfIdValidationRules(), validator, controller.deleteShelf)
  return router
}

module.exports = shelfRoutes
