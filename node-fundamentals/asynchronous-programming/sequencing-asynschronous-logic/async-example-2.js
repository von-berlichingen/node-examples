'use strict';

let color = 'blue';
(function(color) {
  asyncFunction(() => console.log(`The color is ${color}.`));
}(color));

color = 'green';

////////

function asyncFunction(cb) {
  setTimeout(cb, 500);
}
