'use strict';

const http = require('http');
const fs = require('fs');

http
  .createServer((req, res) => {
    if (req.url === '/') {
      fs.readFile('./titles.js', (err, data) => {
        if (err) {
          console.error(err);
          res.end('Server Error');
        } else {
          let titles = JSON.parse(data.toString());

          fs.readFile('./template.html', (err, data) => {
            if (err) {
              console.error(err);
              res.end('Server error');
            } else {
              let tmpl = data.toString();
              let html = tmpl.replace('%', titles.join('<li></li>'));

              res.writeHead(200, {
                'Content-Type': 'text/html'
              });

              res.end(html);
            }
          });
        }
      });
    }
  })
  .listen(3000, 'localhost');
