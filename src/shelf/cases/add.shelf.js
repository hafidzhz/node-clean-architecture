const Shelf = require('../model')

module.exports = repository => {
  async function execute (number, book) {
    return repository.getByNumber(number)
      .then(result => {
        return new Promise((resolve, reject) => {
          if (result.length !== 0) {
            reject(new Error('Data already Exists'))
            return
          }
          const newShelf = new Shelf(number, book)
          resolve(newShelf)
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
