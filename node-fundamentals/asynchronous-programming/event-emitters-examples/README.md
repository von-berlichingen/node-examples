# Event emitters
Event emitters fire events and include the ability to handle these events when triggered.
*Events* are handled through the use of listeners. A *listener* is the association of an event with a callback function that gets triggered each time the event occurs.
#### echo server
An echo server is a simple example where repeated events could occur. When you send data to the server, it will echo the data back.
Run the echo server, and to connect to it by opening a tlenet session.
`telnet 127.0.0.1 3000`
#### echo server once
Listeners can be defined to repeatedly respond to events or to respond **only once**.
This code is the same a echo-server.js, except we are using the *once* method so the server echo the first chunk of data sent to it.
