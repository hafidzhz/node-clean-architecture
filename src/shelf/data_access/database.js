const mongoose = require('mongoose')
const schema = require('./schema')

module.exports = class ShelfDatabase {
  constructor () {
    return mongoose.model('shelf', schema)
  }
}
