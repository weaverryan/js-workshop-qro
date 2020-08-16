module.exports = class {
  constructor (name) {
    this._name = name;
  }

  get name () {
    return this._name;
  }

  printStats () {
    setTimeout(() => {
      const stats = {
        name: this.name,
        population: Math.random() * 100000,
      }

      console.log(stats);
    }, 1000);
  }
}
