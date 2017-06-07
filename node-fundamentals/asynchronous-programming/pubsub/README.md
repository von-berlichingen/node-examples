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
# Error handling
A convention when creating event emitters is to emit an *error* type event instead of directly throwing an error. This allow to define custom event response logic by setting one or more listeners for this event type.
*error-handling.js* shows how an error listener handles an emitted error by logging into the console.
If no listener for this event type is defined when the *error* event type is emitted, the event emitter will output a stack trace (a list of program instructions that had executed up to the point when the error occurred) and halt execution. The stack trace will indicate an error of the type specified by the *emit* call's second argument. This behaviour is unique to *error* type events; when other event types are emitted, and they have no listeners, nothing happens.
If an *error* type event is emitted without an *error* object supplied as the second argument, a stack trace will indicate an `Uncaught, unspecified 'error' event` error, and your application will halt.
