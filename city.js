module.exports = class {
  constructor (name) {
    this._name = name;
  }

  get name () {
    return this._name;
  }

  printNameLater () {
    const randomNumber = multiplier => (Math.random() * multiplier);
    randomNumber(10);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(this.name);

        resolve();
      }, 1000);
    });
  }
}
