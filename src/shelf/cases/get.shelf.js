module.exports = repository => {
  async function execute (number = undefined) {
    let shelf
    if (number !== undefined) {
      shelf = await repository.getByNumber(number)
    } else {
      shelf = await repository.getAll()
    }
    return new Promise((resolve, reject) => {
      resolve(shelf)
    })
  }
  return { execute }
}
