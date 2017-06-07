'use strict';

const fs = require('fs');
const request = require('request');
const htmlparser = require('htmlparser');

const configFile = './rss-feeds.txt';

const tasks = [
  checkForRSSFile,
  readRSSFile,
  downloadRSSFeed,
  parseRSSFeed
];

next();

//////////////////////

function next(err, result) {
  if (err) {
    throw err;
  }

  let currentTask = tasks.shift();

  if (currentTask) {
    currentTask(result);
  }
}

function checkForRSSFile() {
  fs.exists(configFile, (exists) => {
    if (!exists) {
      return next(new Error(`Missing RSS file: ${configFile}`));
    }

    next(null, configFile);
  });
}

function readRSSFile(configFile) {
  fs.readFile(configFile, (err, feedList) => {
    if (err) {
      return next(err);
    }

    feedList = feedList
                .toString()
                .replace(/^\s+|\s+$/g, '')
                .split('\n');

    let random = Math.floor(Math.random() * feedList.length);

    next(null, feedList[random]);
  });
}

function downloadRSSFeed(feedUrl) {
  request({ uri: feedUrl}, (err, res, body) => {
    if (err) {
      return next(err);
    }

    if (res.statusCode !== 200) {
      return next(new Error('Abnormal response status code'));
    }

    next(null, body);
  });
}

function parseRSSFeed(rss) {
  let handler = new htmlparser.RssHandler();
  let parser = new htmlparser.Parser(handler);
  parser.parseComplete(rss);

  if (!handler.dom.items && !handler.dom.items.length) {
    return next(new Error('No RSS items found'));
  }

  let item = handler.dom.items.shift();
  console.log(item.title);
  console.log(item.link);
}
