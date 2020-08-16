module.exports = class {
  constructor (name) {
    this._name = name;
  }

  get name () {
    return this._name;
  }

  getPopulation () {
    return Math.random() * 1000;
  }
}
