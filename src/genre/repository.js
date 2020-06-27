module.exports = class GenreRepository {
  constructor (database) {
    this.database = database
  }

  create (genre) {
    return new Promise((resolve, reject) => {
      this.database(genre).save()
      resolve(genre)
    })
  }

  getByName (name) {
    return new Promise((resolve, reject) => {
      this.database.find({ name: new RegExp(name, 'i') }).then(result => {
        resolve(result)
      })
    })
  }

  getByID (id) {
    return new Promise((resolve, reject) => {
      this.database.findById(id).then(result => {
        resolve(result)
      })
    })
  }

  getAll () {
    return new Promise((resolve, reject) => {
      const genre = this.database.find()
      resolve(genre)
    })
  }

  deleteById (id) {
    return new Promise((resolve, reject) => {
      const result = this.database.findByIdAndDelete(id)
      resolve(result)
    })
  }

  update (id, genre) {
    return new Promise((resolve, reject) => {
      this.database.findByIdAndUpdate(id, genre.toJSON(), { upsert: true, new: true })
        .then(newBook => {
          resolve(newBook)
        })
    })
  }
}
