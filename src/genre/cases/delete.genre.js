module.exports = repository => {
  async function execute (id) {
    const genre = await repository.deleteById(id)
    return new Promise((resolve, reject) => {
      resolve(genre)
    })
  }
  return { execute }
}
