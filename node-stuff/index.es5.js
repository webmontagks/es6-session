'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _fs = require('fs');

var fs = require('fs');

// Create convenient shortcut for console.log
const log = console.log;

{
  // use of modules
  (0, _fs.readFile)('package.json', (err, content) => {
    log(content.length, 'byte');
  });
}

{
  // arrow functions
  log([1, 2, 3].map(x => x * x)); // Squared

  log([1, 2, 3, 4].reduce((x, previous) => previous * x, 1)); // Factorial
}

{
  // classes
  class HomoErectus {}
  class HomoSapiens extends HomoErectus {}

  const human = new HomoSapiens();

  console.assert(human instanceof HomoErectus, 'human is a homoerectus');
}

{
  // destructuring
  let a = 1,
      b = 2;

  var _ref = [b, a];
  a = _ref[0];
  b = _ref[1];

  console.log({ a, b });
}

{
  var marked0$0 = [generator].map(regeneratorRuntime.mark);
  // generators and destructuring
  function generator() {
    var i;
    return regeneratorRuntime.wrap(function generator$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          i = 0;

        case 1:
          if (!true) {
            context$1$0.next = 6;
            break;
          }

          context$1$0.next = 4;
          return i++;

        case 4:
          context$1$0.next = 1;
          break;

        case 6:
        case 'end':
          return context$1$0.stop();
      }
    }, marked0$0[0], this);
  }

  var _generator = generator();

  var _generator2 = _slicedToArray(_generator, 6);

  let first = _generator2[0];
  let second = _generator2[1];
  let third = _generator2[2];
  let sixth = _generator2[5];

  console.log([first, second, third, sixth]);
}

