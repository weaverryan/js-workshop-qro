module.exports = class {
  constructor (name) {
    this._name = name;
  }

  get name () {
    return this._name;
  }

  printNameLater () {
    const randomNumber = multiplier => (Math.random() * multiplier);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(this.name);

        resolve(randomNumber(10));
      }, 1000);
    });
  }
}
