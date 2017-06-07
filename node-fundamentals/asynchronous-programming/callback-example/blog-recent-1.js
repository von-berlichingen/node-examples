'use strict';

// Creating named functions that handle the individual levels
// of callbacks nesting make code easier to maintain.
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
      hadError(err, res)
    } else {
      getTemplate(JSON.parse(data.toString()), res)
    }
  });
}

function getTemplate(titles, res) {
  fs.readFile('./template.html', (err, data) => {
    if (err) {
      hadError(err, res)
    } else {
      formatHtml(titles, data.toString(), res);
    }
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
