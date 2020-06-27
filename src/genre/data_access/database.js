const mongoose = require('mongoose')
const schema = require('./schema')

module.exports = class GenreDatabase {
  constructor () {
    return mongoose.model('genre', schema)
  }
}
