'use strict';

const flow = require('nimble');

flow.series([
  function(cb) {
    setTimeout(() => {
      console.log('Executing first');
      cb();
    }, 1000);
  },
  function(cb) {
    setTimeout(() => {
      console.log('Executing second');
      cb();
    }, 500);
  },
  function() {
    setTimeout(() => {
      console.log('Executing third');
    }, 100);
  }
]);
