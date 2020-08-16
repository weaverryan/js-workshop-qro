module.exports = class {
  constructor (name) {
    this._name = name;
  }

  get name () {
    return this._name;
  }

  printStats () {
    const stats = {
      name: this.name,
      population: Math.random() * 1000000,
    }

    console.log(stats);
  }
}
