const net = require('net');

net
  .createServer((socket) => {
    socket.on('data', data => socket.write(`You typed: ${data}`));
  })
  .listen(3000);
