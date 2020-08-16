const City = require('./city');

const qro = new City('Querétaro');

qro.getNameLater()
  .then((name) => {
    console.log('callback!');
    console.log(name);
  })
  .catch(() => {
    console.log('I failed!');

    return Math.random();
  })
;

console.log('Done!');
