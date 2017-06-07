'use strict';

let color = 'blue';

asyncFunction(() => console.log(`The color is ${color}.`));

color = 'green';

////////

function asyncFunction(cb) {
  setTimeout(cb, 500);
}
