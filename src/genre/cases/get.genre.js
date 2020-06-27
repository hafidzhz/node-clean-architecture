module.exports = repository => {
  async function execute (params) {
    let genre
    if (params !== undefined) {
      if (params.name !== undefined) {
        genre = await repository.getByName(params.name)
      } else if (params.id !== undefined) {
        genre = await repository.getByID(params.id)
      }
    } else {
      genre = await repository.getAll()
    }
    return new Promise((resolve, reject) => {
      resolve(genre)
    })
  }
  return { execute }
}
