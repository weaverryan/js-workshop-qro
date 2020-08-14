module.exports = class {
  constructor (name) {
    this._name = name;
  }

  get name () {
    return this._name;
  }

  printNameLater() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject();
        //console.log(this.name);

        //resolve(Math.random());
      }, 1000);
    });
  }
}
