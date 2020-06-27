module.exports = class ShelfRepository {
  constructor (database) {
    this.database = database
  }

  create (shelf) {
    return new Promise((resolve, reject) => {
      console.log(shelf)
      this.database(shelf).save()
      resolve(shelf)
    })
  }

  getByNumber (number) {
    return new Promise((resolve, reject) => {
      this.database.find({ number: new RegExp(number, 'i') })
        .populate('book')
        .then(result => {
          resolve(result)
        })
    })
  }

  getAll () {
    return new Promise((resolve, reject) => {
      const shelf = this.database.find().populate({
        path: 'book',
        model: 'book',
        populate: {
          path: 'genre',
          model: 'genre'
        }
      })
      resolve(shelf)
    })
  }

  deleteById (id) {
    return new Promise((resolve, reject) => {
      const result = this.database.findByIdAndDelete(id)
      resolve(result)
    })
  }

  update (id, shelf) {
    return new Promise((resolve, reject) => {
      this.database.findByIdAndUpdate(id, shelf.toJSON(), { upsert: true, new: true })
        .then(newBook => {
          resolve(newBook)
        })
    })
  }
}
