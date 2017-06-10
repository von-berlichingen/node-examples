'use strict';

const http = require('http');
const url = require('url');

const items = [];

http
  .createServer((req, res) => {
    if (req.method === 'POST') {
      let item = '';

      req.setEncoding('utf8');
      req.on('data', (chunk) => item += chunk);
      req.on('end', () => {
        items.push(item);

        console.log('OK\n');
        res.end();
      });
    }

    if (req.method === 'GET') {
      let body = items
        .map((item, i) => `${i}: ${item}\n`)
        .join('\n');

      res.setHeader('Content-Length', Buffer.byteLength(body));
      res.setHeader('Content-Type', 'text/plain; charset="utf-8"')
      console.log(res.getHeaders());
      res.end(body);
    }

    if (req.method === 'DELETE') {
      let path = url.parse(req.url).pathname;
      let i = parseInt(path.slice(1), 10);

      if (isNaN(i)) {
        res.statusCode = 400;
        res.end('Invalid item id');
      } else if (!items[i]) {
        res.statusCode = 404;
        res.end('Item not found');
      } else {
        items.splice(i, 1);
        res.end('Ok\n');
      }
    }

    if (req.method === 'PUT') {
      let path = url.parse(req.url).pathname;
      let i = parseInt(path.slice(1), 10);

      if (isNaN(i)) {
        res.statusCode = 400;
        res.end('Invalid item id');
      }
      else if (i > items.length - 1) {
        res.statusCode = 404;
        res.end('Item not found');
      } else {
        let item = '';

        req.on('data', (chunk) => item += chunk);
        req.on('end', () => {
          items[i] = item;

          res.statusCode = 200;
          res.end('Updated\n');
        });
      }
    }
  })
  .listen(3000);
