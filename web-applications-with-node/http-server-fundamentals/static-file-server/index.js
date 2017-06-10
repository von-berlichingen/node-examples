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
    let stream = fs.createReadStream(path);

    stream.pipe(res);
  })
  .listen(3000);
