# PUB/SUB Example (event emitter)
Node's built-in events module allows to create your own event emitters.
The following code defines a *channel* event emitter with a single listener that responds to someone joining the channel. We use *on* (or, alternatively, the longer form *addListener*) to add a listener to an event emitter:
```javascript
var EventEmitter = require('events').EventEmitter;
var channel = new EventEmitter();
channel.on('join', function() {
  console.log('Welcome');
});
```
The *join* callback, however, won't never be called because we haven't emitted any events yet. We could add a line to the listing that would trigger an event using the *emit* function:
```javascript
channel.emit('join');
```
##### Event NAMES
Events are simply keys an can have any string value: data, join, etc... There is only one special event, called *error*.
# Simple Chat server without socket.io
Here we buit a simple chat server. A chat server channel is implemented as an event emitter that reponds to *join* events emitted by clients. When a client joins the channel, the join listener logic, in turn, adds an additional client specific listener to the channel for the *broadcast* event that will write any message broadcast to the client socket. The names of event types, such as *join* and *broadcast*, are completely random.
