const { Schema } = require('mongoose')

module.exports = new Schema({
  title: {
    type: String,
    required: true
  },
  genre: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'genre'
  },
  author: {
    type: String,
    required: true
  },
  release: {
    type: Date,
    required: true
  }
}, { timestamp: { createdAt: 'createdAt', updatedAt: 'updatedAt' } })
