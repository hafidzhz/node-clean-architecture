const Book = require('../model')
const moment = require('moment')

module.exports = repository => {
  async function execute (id, title, genre, author, release) {
    const date = moment(release, 'DD/MM/YYYY')
    const newBook = new Book(title, genre, author, date)
    const updatedBook = await repository.update(id, newBook)
    return new Promise((resolve, reject) => {
      resolve(updatedBook)
    })
  }
  return { execute }
}
