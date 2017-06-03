'use strict';
const fs = require('fs');
const stream = fs.createReadStream('./introduction.md');

stream
  .on('data', chunk => console.log(chunk.toString()))
  .on('end', () => console.log('finished'));
