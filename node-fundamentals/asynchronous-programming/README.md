# Asynchronous programming techniques
There are two popular models in the node world for managing reponse logic: **callbacks** and **event listeners**.
**Callbacks** generally define logic for one-off responses. Performing a database query, for example, specify a callback to determine what to do with the query results.
**Event listeners** are essentially callbacks that are associated with a conceptual entity (an *event*).
As an example, in Node an HTTP server emits a *request* event when an HTTP request is made. You can listen for that *request* event to occur and add some response logic.
This is an example of a *handleRequest* function that will be called whenever a *request* event is emitted:
```javascript
server.on('request', handleRequest);
```
