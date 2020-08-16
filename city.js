module.exports = class {
  constructor (name) {
    this._name = name;
  }

  get name () {
    return this._name;
  }

  printStats () {
    const randomNumber = () => (Math.random());

    setTimeout(() => {
      const stats = {
        name: this.name,
        population: randomNumber() * 100000,
      }

      console.log(stats);
    }, 1000);
  }
}
