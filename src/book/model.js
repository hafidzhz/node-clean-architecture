module.exports = class Book {
  constructor (title, genre, author, release) {
    this.title = title
    this.genre = genre
    this.author = author
    this.release = release
  }

  toJSON () {
    return {
      title: this.title,
      genre: this.genre,
      author: this.author,
      release: this.release
    }
  }
}
