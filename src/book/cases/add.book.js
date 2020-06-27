const Book = require('../model')
const moment = require('moment')

module.exports = repository => {
  async function execute (title, genre, author, release) {
    return repository.getByTitle(title)
      .then(result => {
        return new Promise((resolve, reject) => {
          console.log(result.length !== 0)
          if (result.length !== 0) {
            reject(new Error('Data already Exists'))
            return
          }
          const date = moment(release, 'DD/MM/YYYY')
          const newBook = new Book(title, genre, author, date.toDate())
          resolve(newBook)
        })
          .then(result => {
            return repository.create(result)
          })
          .then(result => {
            return Promise.resolve(result)
          })
      })
  }
  return { execute }
}
