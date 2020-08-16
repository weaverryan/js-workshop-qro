module.exports = class {
  constructor (name) {
    this._name = name;
  }

  get name () {
    return this._name;
  }

  printStats () {
    const getRandomNumber = (multiplier) => (Math.random() * multiplier);

    setTimeout(() => {
      const stats = {
        name: this.name,
        population: getRandomNumber(100000),
      }

      console.log(stats);
    }, 1000);
  }
}
