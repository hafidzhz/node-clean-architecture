const { Schema } = require('mongoose')

module.exports = new Schema({
  number: {
    type: String,
    required: true
  },
  book: {
    type: [Schema.Types.ObjectId],
    required: true,
    ref: 'book'
  }
}, { timestamp: { createdAt: 'createdAt', updatedAt: 'updatedAt' } })
