module.exports = class {
  constructor (name) {
    this._name = name;
  }

  get name () {
    return this._name;
  }

  printStats () {
    const randomNumber = () => (Math.random());
    randomNumber();

    setTimeout(() => {
      const stats = {
        name: this.name,
        population: Math.random() * 1000,
      }

      console.log(stats);
    }, 1000);
  }
}
