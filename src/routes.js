const bookRoutes = require('./book/routes')
const genreRoutes = require('./genre/routes')
const shelfRoutes = require('./shelf/routes')
const express = require('express')
const Router = express.Router()

const Routes = dependencies => {
  const router = Router
  router.use('/book', bookRoutes(dependencies))
  router.use('/genre', genreRoutes(dependencies))
  router.use('/shelf', shelfRoutes(dependencies))
  return router
}

module.exports = Routes
