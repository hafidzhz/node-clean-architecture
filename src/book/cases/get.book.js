module.exports = repository => {
  async function execute (params) {
    let book
    if (params !== undefined) {
      if (params.title !== undefined) {
        book = await repository.getByTitle(params.title)
      } else if (params.id !== undefined) {
        book = await repository.getById(params.id)
      } else if (params.genre !== undefined) {
        book = await repository.getByGenre(params.genre)
      }
    } else {
      book = await repository.getAll()
    }
    return new Promise((resolve, reject) => {
      resolve(book)
    })
  }
  return { execute }
}
