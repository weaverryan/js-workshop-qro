const City = require('./city');

const qro = new City('Querétaro');

console.log(qro.name);

qro.printStats()
  .then((stats) => {
    console.log('callback after printStats()!');
    console.log(stats);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Math.round(stats.population));
      }, 2000);
    });
  })
  .then((data) => {
    console.log(data);
  })
  .catch(() => {
    console.log('I failed!');
  })
;

console.log('End of script!');
