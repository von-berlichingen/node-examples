'use strict';
const events = require('events');
const util = require('util');
const fs = require('fs');
const watchDir = './watch';
const processedDir = './done';

class Watcher {
  constructor(watchDir, processedDir) {
    this.watchDir = watchDir;
    this.processedDir = processedDir;
  }

  watch() {
    fs.readdir(this.watchDir, (err, files) => {
      if (err) throw err;
      files.forEach((file) => this.emit('process', file));
    });
  }

  start() {
    fs.watchFile(this.watchDir, () => watcher.watch());
  }
}

util.inherits(Watcher, events.EventEmitter);

let watcher = new Watcher(watchDir, processedDir);

watcher.on('process', file => {
  let watchFile = `${watcher.watchDir}/${file}`;
  let processedFile = `${watcher.processedDir}/${file.toLowerCase()}`;

  fs.rename(watchFile, processedFile, err => {
    if (err) throw err;
  });
});

watcher.start();
