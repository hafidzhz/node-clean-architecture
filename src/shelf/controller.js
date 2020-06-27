const GetShelf = require('./cases/get.shelf')
const AddShelf = require('./cases/add.shelf')
const UpdateShelf = require('./cases/update.shelf')
const DeleteShelf = require('./cases/delete.shelf')

module.exports = repository => {
  const getShelf = (req, res, next) => {
    const getShelfCase = GetShelf(repository)
    if (req.query.number !== undefined) {
      const number = req.query.number
      getShelfCase.execute(number)
        .then(
          result => {
            console.log('RESULT', result)
            res.json(result)
          },
          err => { next(err) }
        )
    } else {
      getShelfCase.execute()
        .then(
          result => {
            console.log('RESULT', result)
            res.json(result)
          },
          err => { next(err) }
        )
    }
  }

  const getShelfById = (req, res, next) => {
    const id = req.params.id
    const getBookCase = GetShelf(repository)
    getBookCase.execute({ id: id })
      .then(
        result => {
          console.log('RESULT', result)
          res.json(result)
        },
        err => { next(err) }
      )
  }

  const addShelf = (req, res, next) => {
    const addShelfCase = AddShelf(repository)
    const { number, book } = req.body
    addShelfCase.execute(number, book)
      .then(
        result => { res.json(result) },
        err => { next(err) }
      )
  }

  const updateShelf = (req, res, next) => {
    const updateShelfCase = UpdateShelf(repository)
    const id = req.params.id
    const { number, book } = req.body
    updateShelfCase.execute(id, number, book)
      .then(
        result => { res.json(result) },
        err => { next(err) }
      )
  }

  const deleteShelf = (req, res, next) => {
    const id = req.params.id
    const deleteBookCase = DeleteShelf(repository)
    deleteBookCase.execute(id)
      .then(
        result => { res.json(result) },
        err => { next(err) }
      )
  }

  return {
    getShelf,
    getShelfById,
    addShelf,
    updateShelf,
    deleteShelf
  }
}
