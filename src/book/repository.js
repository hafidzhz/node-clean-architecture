module.exports = class BookRepository {
  constructor (database) {
    this.database = database
  }

  create (book) {
    return new Promise((resolve, reject) => {
      this.database(book).save()
      resolve(book)
    })
  }

  getByTitle (title) {
    return new Promise((resolve, reject) => {
      this.database.find({ title: new RegExp(title, 'i') })
        .populate('genre')
        .then(result => {
          resolve(result)
        })
    })
  }

  getAll () {
    return new Promise((resolve, reject) => {
      const book = this.database.find().populate('genre')
      resolve(book)
    })
  }

  getById (id) {
    return new Promise((resolve, reject) => {
      const book = this.database.findById(id).populate('genre')
      resolve(book)
    })
  }

  getByGenre (genre) {
    return new Promise((resolve, reject) => {
      const book = this.database.find({ genre: genre }).populate('genre')
      resolve(book)
    })
  }

  deleteById (id) {
    return new Promise((resolve, reject) => {
      const result = this.database.findByIdAndDelete(id)
      resolve(result)
    })
  }

  update (id, book) {
    return new Promise((resolve, reject) => {
      this.database.findByIdAndUpdate(id, book.toJSON(), { upsert: true, new: true }).populate('genre')
        .then(newBook => {
          resolve(newBook)
        })
    })
  }
}
