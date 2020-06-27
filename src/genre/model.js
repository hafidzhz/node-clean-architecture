module.exports = class Genre {
  constructor (name) {
    this.name = name
  }

  toJSON () {
    return {
      name: this.name
    }
  }
}