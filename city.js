module.exports = class {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    async printNameLater() {
        await setTimeout(() => {
            //reject();
            console.log(this.name);
        }, 1000);
    }
}
