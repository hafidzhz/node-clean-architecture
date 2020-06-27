const Genre = require('../model')

module.exports = repository => {
  async function execute (id, name) {
    const newGenre = new Genre(name)
    const updatedGenre = await repository.update(id, newGenre)
    return new Promise((resolve, reject) => {
      resolve(updatedGenre)
    })
  }
  return { execute }
}
