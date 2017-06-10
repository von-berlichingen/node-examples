'use strict';

const fs = require('fs');

const readStream = fs.createReadStream('./README.md');
const writeStream = fs.createWriteStream('./copy.md');

readStream.pipe(writeStream);
