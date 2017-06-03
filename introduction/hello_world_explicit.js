'use strict';

const http = require('http');
const server = http.createServer();

console.log(server);

server
  .on('request', (req, res) => {
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });

    res.end('Hello world');
  })
  .listen(3000);

console.log('Server running at http://localhost:3000/');
