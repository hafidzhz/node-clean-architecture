const Genre = require('../model')

module.exports = repository => {
  async function execute (name) {
    return repository.getByName(name)
      .then(result => {
        return new Promise((resolve, reject) => {
          if (result.length !== 0) {
            reject(new Error('Data already Exists'))
            return
          }
          const newGenre = new Genre(name)
          resolve(newGenre)
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
