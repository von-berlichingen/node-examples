'use strict';

const http = require('http');
const fs = require('fs');
const parse = require('url').parse;
const join = require('path').join;

const root = __dirname;

http
  .createServer((req, res) => {
    let url = parse(req.url);
    let path = join(root, url.pathname);

    fs.stat(path, (err, stat) => {
      if (err) {
        if (err.code === 'ENOENT') {
          res.statusCode = 404;
          res.end('Not found');
        } else {
          res.statusCode = 500;
          res.end('Internal Server Error');
        }
      } else {
        let stream = fs.createReadStream(path);

        stream.pipe(res);
        stream.on('error', (err) => {
          res.statusCode = 500;
          res.end('Internal Server Error');
        });
      }
    });
  })
  .listen(3000);
