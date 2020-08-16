module.exports = class {
  constructor (name) {
    this._name = name;
  }

  get name () {
    return this._name;
  }

  getPopulation () {
    setTimeout(function() {
      return Math.random() * 1000;
    }, 1000);
  }
}
