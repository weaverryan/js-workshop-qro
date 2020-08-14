module.exports = class {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    /**
     * @returns {Promise<void>}
     */
    async printNameLater() {
        await setTimeout(() => {
            //reject();
            console.log(this.name);
        }, 1000);

        return Math.random();
    }
}
