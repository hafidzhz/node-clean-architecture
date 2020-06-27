const Shelf = require('../model')

module.exports = repository => {
  async function execute (id, number, book) {
    const newShelf = new Shelf(number, book)
    const updatedShelf = await repository.update(id, newShelf)
    return new Promise((resolve, reject) => {
      resolve(updatedShelf)
    })
  }
  return { execute }
}
