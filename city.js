module.exports = class {
  constructor (name) {
    this._name = name;
  }

  get name () {
    return this._name;
  }

  getStats () {
    const randomNumber = multiplier => (Math.random() * multiplier);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        //reject();

        const stats = {
          name: this.name,
          population: randomNumber(100000),
        }

        resolve(stats);
      }, 1000);
    });
  }

  async printStats () {
    const stats = await this.getStats();
    console.log(stats);
  }
}
