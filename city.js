/**
 * @typedef {Object} Stats
 * @property {string} name
 * @property {number} population
 */

module.exports = class {
  constructor (name) {
    this._name = name;
  }

  get name () {
    return this._name;
  }

  getStats () {
    const getRandomNumber = multiplier => (Math.random() * multiplier);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        //reject();

        const stats = {
          name: this.name,
          population: getRandomNumber(100000),
        }

        resolve(stats);
      }, 1000);
    });
  }

  /**
   * @returns {Promise<Stats>}
   */
  async printStats () {
    const stats = await this.getStats();
    console.log(stats);

    return stats;
  }
}
