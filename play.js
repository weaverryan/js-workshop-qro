const City = require('./city');

const qro = new City('Querétaro');

qro.printNameLater()
    .then((data) => {
        console.log('callback!');
        console.log(data);

        return data * 100;
    })
    .then((data) => {
        console.log(data);
    })
;

console.log('Done!');
