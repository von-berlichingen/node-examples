# HTTP server fundamentals
Node has a relatively low-level API. Node's HTTP interface is similarly low-level when compared with frameworks or languages such as PHP in order to keep it fast and flexible.
This section will focus on:
* How node presents incoming HTTP requests to developers
* How to write a basic HTTP server that responds with "Hello wrold"
* How to read incoming request headers and set outgoing response headers
* How to set the status code of an HTTP response

## Basic HTTP server
To implement a simple **Hello World HTTP server**, first, we call the `res.write()` method, which writes response data to the socket and the use `res.end()` method to end the response. The last thing we need to do is bind to a port so we can listen from incoming requests, by using `server.listen()` method.
