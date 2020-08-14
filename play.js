const City = require('./city');

const qro = new City('Querétaro');

qro.printNameLater()
    .then(() => {
        console.log('callback!');
    })

console.log('Done!');
