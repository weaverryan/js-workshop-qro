module.exports = class {
  constructor (name) {
    this._name = name;
  }

  get name () {
    return this._name;
  }

  async printNameLater () {
    const randomNumber = multiplier => (Math.random() * multiplier);

    await setTimeout(() => {
      //reject();
      console.log(this.name);
    }, 1000);
    console.log('after setTimeout');
  }
}
