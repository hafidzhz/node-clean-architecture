module.exports = repository => {
  async function execute (id) {
    const book = await repository.deleteById(id)
    return new Promise((resolve, reject) => {
      resolve(book)
    })
  }
  return { execute }
}
