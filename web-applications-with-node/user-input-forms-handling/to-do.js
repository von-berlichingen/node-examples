'use strict';

const http = require('http');
const qs = require('querystring');
const items = [];

http
  .createServer((req, res) => {
    if (req.url === '/') {
      if (req.method === 'GET') {
        show(res);
      } else if (req.method === 'POST') {
        add(req, res);
      } else {
        badRequest(res);
      }
    } else {
      notFound(res);
    }
  })
  .listen(3000);

////////////////////////////////

function show(res) {
  const html = `
  <html>
    <head>
      <title>Todo list></title>
    </head>
    <body>
      <h1>Todo List</h1>
      <ul>
        ${items
          .map(item => `<li>${item}</li>`)
          .join('')}
      </ul>
      <form method="post" action="/">
        <p><input type="text" name="item"/></p>
        <p><input type="submit" value="Add Item"/></p>
      </form>
    </body>
  </html>`;

  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Content-Length', Buffer.byteLength(html));
  res.end(html);
}

function notFound(res) {
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Not Found');
}

function badRequest(res) {
  res.statusCode = 400;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Bad Request');
}

function add(req, res) {
  let body = '';

  req.setEncoding('utf8');
  req.on('data', chunk => body += chunk);
  req.on('end', () => {
    let obj = qs.parse(body);
    items.push(obj.item);
    show(res);
  })
}
