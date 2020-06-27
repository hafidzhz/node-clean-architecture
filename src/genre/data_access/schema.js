const { Schema } = require('mongoose')

module.exports = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
}, { timestamp: { createdAt: 'createdAt', updatedAt: 'updatedAt' } })
