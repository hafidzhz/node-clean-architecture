const GetBook = require('./cases/get.book')
const AddBook = require('./cases/add.book')
const UpdateBook = require('./cases/update.book')
const DeleteBook = require('./cases/delete.book')

module.exports = repository => {
  const getBook = (req, res, next) => {
    const getBookCase = GetBook(repository)
    if (req.query.title !== undefined) {
      const title = req.query.title
      getBookCase.execute({ title: title })
        .then(
          result => {
            console.log('RESULT', result)
            res.json(result)
          },
          err => { next(err) }
        )
    } else if (req.query.genre !== undefined) {
      const genre = req.query.genre
      getBookCase.execute({ genre: genre })
        .then(
          result => {
            console.log('RESULT', result)
            res.json(result)
          },
          err => { next(err) }
        )
    } else {
      getBookCase.execute()
        .then(
          result => {
            console.log('RESULT', result)
            res.json(result)
          },
          err => { next(err) }
        )
    }
  }

  const getBookById = (req, res, next) => {
    const id = req.params.id
    const getBookCase = GetBook(repository)
    getBookCase.execute({ id: id })
      .then(
        result => {
          console.log('RESULT', result)
          res.json(result)
        },
        err => { next(err) }
      )
  }

  const addBook = (req, res, next) => {
    const addBookCase = AddBook(repository)
    const { title, genre, author, release } = req.body
    addBookCase.execute(title, genre, author, release)
      .then(
        result => { res.json(result) },
        err => { next(err) }
      )
  }

  const updateBook = (req, res, next) => {
    const updateBookCase = UpdateBook(repository)
    const id = req.params.id
    const { title, genre, author, release } = req.body
    updateBookCase.execute(id, title, genre, author, release)
      .then(
        result => { res.json(result) },
        err => { next(err) }
      )
  }

  const deleteBook = (req, res, next) => {
    const id = req.params.id
    const deleteBookCase = DeleteBook(repository)
    deleteBookCase.execute(id)
      .then(
        result => { res.json(result) },
        err => { next(err) }
      )
  }

  return {
    getBook,
    addBook,
    getBookById,
    updateBook,
    deleteBook
  }
}
