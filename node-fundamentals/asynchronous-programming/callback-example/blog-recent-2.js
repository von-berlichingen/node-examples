'use strict';

// We can also reduce the nesting caused by if/else blocks
// with another common idiom in Node: returning early from a function.
// This makes it also explicit that the function should not
// continue executing.

const http = require('http');
const fs = require('fs');

http
  .createServer((req, res) => {
    if (req.url === '/') {
      getTitles(res);
    }
  })
  .listen(3000, 'localhost');



/////////////////////

function getTitles(res) {
  fs.readFile('./titles.js', (err, data) => {
    if (err) {
      return hadError(err, res)
    }

    getTemplate(JSON.parse(data.toString()), res);
  });
}

function getTemplate(titles, res) {
  fs.readFile('./template.html', (err, data) => {
    if (err) {
      hadError(err, res);
    }

    formatHtml(titles, data.toString(), res);
  });
}

function formatHtml(titles, tmpl, res) {
  let html = tmpl.replace('%', titles.join('<li></li>'));

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
}

function hadError(err, res) {
  console.log(error);
  res.end('Server Error');
}
