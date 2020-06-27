const GetGenre = require('./cases/get.genre')
const AddGenre = require('./cases/add.genre')
const UpdateGenre = require('./cases/update.genre')
const DeleteGenre = require('./cases/delete.genre')

module.exports = repository => {
  const getGenre = (req, res, next) => {
    const getGenreCase = GetGenre(repository)
    if (req.query.name !== undefined) {
      const name = req.query.name
      getGenreCase.execute({ name: name })
        .then(
          result => {
            console.log('RESULT', result)
            res.json(result)
          },
          err => { next(err) }
        )
    } else {
      getGenreCase.execute()
        .then(
          result => {
            console.log('RESULT', result)
            res.json(result)
          },
          err => { next(err) }
        )
    }
  }

  const getGenreById = (req, res, next) => {
    const id = req.params.id
    const getGenreCase = GetGenre(repository)
    getGenreCase.execute({ id: id })
      .then(
        result => {
          console.log('RESULT', result)
          res.json(result)
        },
        err => { next(err) }
      )
  }

  const addGenre = (req, res, next) => {
    const addGenreCase = AddGenre(repository)
    const { name } = req.body
    addGenreCase.execute(name)
      .then(
        result => { res.json(result) },
        err => { next(err) }
      )
  }

  const updateGenre = (req, res, next) => {
    const updateGenreCase = UpdateGenre(repository)
    const id = req.params.id
    const { name } = req.body
    updateGenreCase.execute(id, name)
      .then(
        result => { res.json(result) },
        err => { next(err) }
      )
  }

  const deleteGenre = (req, res, next) => {
    const deleteGenreCase = DeleteGenre(repository)
    const id = req.params.id
    deleteGenreCase.execute(id)
      .then(
        result => { res.json(result) },
        err => { next(err) }
      )
  }

  return {
    getGenre,
    getGenreById,
    addGenre,
    updateGenre,
    deleteGenre
  }
}
