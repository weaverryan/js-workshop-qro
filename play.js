const City = require('./city');

const qro = new City('Querétaro');

setTimeout(function() {
    console.log(qro.name);
}, 1000);

console.log('Done!');
