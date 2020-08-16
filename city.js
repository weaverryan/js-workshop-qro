module.exports = class {
  constructor (name) {
    this._name = name;
  }

  get name () {
    return this._name;
  }

  fetchStats () {
    return {
      name: this.name,
      population: Math.random() * 1000,
    }
  }
}
