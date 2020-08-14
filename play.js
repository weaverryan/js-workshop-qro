const City = require('./city');

const qro = new City('Querétaro');

qro.printNameLater()
  .then((data) => {
    console.log('callback!');
    console.log(data);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data * 100);
      }, 2000);
    });
  })
  .catch(() => {
    console.log('I failed!');

    return Math.random();
  })
  .then((data) => {
    console.log(data);
  })
;

console.log('Done!');
