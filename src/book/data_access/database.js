const mongoose = require('mongoose')
const schema = require('./schema')

module.exports = class BookDatabase {
  constructor () {
    return mongoose.model('book', schema)
  }
}
