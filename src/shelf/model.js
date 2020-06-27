module.exports = class Shelf {
  constructor (number, book) {
    this.number = number
    this.book = book
  }

  toJSON () {
    return {
      number: this.number,
      book: this.book
    }
  }
}
