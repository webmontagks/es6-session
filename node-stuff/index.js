import {readFile} from 'fs';

var fs = require('fs');

// Create convenient shortcut for console.log
const log = console.log;


{ // use of modules
  readFile('package.json', (err, content) => {
    log(content.length, 'byte');
  });
}


{ // arrow functions
  log([1, 2, 3].map(x => x * x)); // Squared

  log([1, 2, 3, 4].reduce((x, previous) => previous * x, 1)); // Factorial
}


{ // classes
  class HomoErectus {}
  class HomoSapiens extends HomoErectus {}

  const human = new HomoSapiens();

  console.assert(human instanceof HomoErectus, 'human is a homoerectus');
}


{ // destructuring
  let a = 1, b = 2;

  [a, b] = [b, a];

  console.log({a, b});
}


{ // generators and destructuring
  function* generator() {
    let i = 0;
    while(true) {
      yield i++;
    }
  }

  let [first, second, third, , , sixth] = generator();

  console.log([first, second, third, sixth]);
}