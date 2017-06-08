'use strict';

const fs = require('fs');

let completedTasks = 0;
let tasks = [];
let wordCounts = {};
let filesDir = './text';

fs.readdir(filesDir, (err, files) => {
  if (err) {
    throw err;
  }

  files.map((file) => {
    return (() => {
      return () => {
        fs.readFile(`${filesDir}/${file}`, (err, text) => {
          if (err) {
            throw err;
          }
          countWordsInText(text);
          checkIfComplete();
        })
      }
    })();
  })
  .forEach((task) => {
    return task()
  })
});

///////////////

function checkIfComplete() {
  completedTasks ++;

  if (completedTasks === 5) {
    for (let index in wordCounts) {
      console.log(`${index}: ${wordCounts[index]}`);
    }
  }
}

function countWordsInText(text) {
  let words = text
                .toString()
                .toLowerCase()
                .split(/\W+/)
                .sort();

  for (let index in words) {
    let word = words[index];

    if (word) {
      wordCounts[word] = wordCounts[word] ?
        wordCounts[word] + 1 : 1;
    }
  }
}
