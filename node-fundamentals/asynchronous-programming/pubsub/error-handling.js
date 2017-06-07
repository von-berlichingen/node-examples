'use strict';

const events = require('events');
const myEmitter = new events.EventEmitter();

myEmitter.on('error', err => console.log('Error', err.message));

myEmitter.emit('error', new Error('Something is wrong'));
