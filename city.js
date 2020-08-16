module.exports = class {
  constructor (name) {
    this._name = name;
  }

  get name () {
    return this._name;
  }

  printStats () {
    const randomNumber = (multiplier) => (Math.random() * multiplier);

    setTimeout(() => {
      const stats = {
        name: this.name,
        population: randomNumber(10),
      }

      console.log(stats);
    }, 1000);
  }
}
