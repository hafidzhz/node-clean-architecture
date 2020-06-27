module.exports = repository => {
  async function execute (id) {
    const shelf = await repository.deleteById(id)
    return new Promise((resolve, reject) => {
      resolve(shelf)
    })
  }
  return { execute }
}
