module.exports = class {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  printNameLater() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(this.name);

<<<<<<< HEAD
                resolve(Math.random());
            }, 1000);
        });
    }
=======
        resolve();
      }, 1000);
    });
  }
>>>>>>> _tuts/master/promise-do-something-after
}
