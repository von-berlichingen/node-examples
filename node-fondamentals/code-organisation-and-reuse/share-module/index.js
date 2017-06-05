'use strict';

// incrementer will increment the shared variable of shared-module
// and set it to 2
const incrementer = require('./incrementer');

// logger will log the shared value of shared-document
// which is now set to 2
const logger = require('./logger');

// running index.js will log 2 to the console
