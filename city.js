module.exports = class {
  constructor (name) {
    this._name = name;
  }

  get name () {
    return this._name;
  }

  printNameLater () {
    const randomNumber = multiplier => (Math.random() * multiplier);

    await setTimeout(() => {
      //reject();
      console.log(this.name);
    }, 1000);
  }
}
