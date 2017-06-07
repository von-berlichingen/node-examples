'use strict';

setTimeout(() => {
  console.log('Executing first.');
  setTimeout(() => {
    console.log('Executing second.');
    setTimeout(() => {
      console.log('Executing third');
    }, 100);
  }, 500);
}, 1000);
