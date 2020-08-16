const City = require('./city');

const qro = new City('Querétaro');

console.log(qro.name);

qro.printStats()
  .then(() => {
    console.log('callback!');
  })
;

console.log('End of script!');
