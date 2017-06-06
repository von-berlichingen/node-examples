'use strict';

const events = require('events');
const net = require('net');

const channel = new events.EventEmitter();

channel.clients = {};
channel.subscriptions = {};

channel.on('join', (id, client) => {
  channel.clients[id] = client;
  channel.subscriptions[id] = (senderId, message) => {
    if (id !== senderId) {
      channel.clients[id].write(message);
    }
  }

  channel.on('broadcast', channel.subscriptions[id]);

  channel.on('leave', (id) => {
    channel.removeListener('broadcast', channel.subscriptions[id]);
    channel.emit('broadcast', id, `${id} has left the chat.\n`);
  });

  channel.on('shutdown', () => {
    channel.emit('broadcast', '', `Chat has shutdown.\n`);
    channel.removeAllListeners('broadcast');
  })
});

net
  .createServer((client) => {
    let id = `${client.remoteAddress}: ${client.remotePort}`;

    channel.emit('join', id, client)

    client.on('data', data => {
      data = data.toString();

      if (data === 'shutdown\r\n') {
        channel.emit('shutdown');
      }

      channel.emit('broadcast', id, data);
    });

    client.on('close', () => {
      console.log({id});
      channel.emit('leave', id);
    });
  })
  .listen(3000);
