module.exports = class {
  constructor (name) {
    this._name = name;
  }

  get name () {
    return this._name;
  }

  getStats () {
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

  printStats () {
    this.getStats().then((stats) => {
      console.log(stats);
    })
  }
}
