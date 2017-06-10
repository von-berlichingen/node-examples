# Serving static files
Many web applications share similar, if not identical, needs, and serving static files (CSS, JavaScript, images) is certainly one of these. Although writing a robust and efficient static file server is nontrivial, and robust implementations already exist with Node's community, implementing your own static file server in this section will illustrate Node's low-level filesystem API.
In this part, we'll learn how to:
* Create a simple file server
* Optimize the data transfer with `pipe()`
* Handle user and filesystem errors by setting the status code

## Creating a static file server
Each static file server has a root directory, which is the base directory files are served from. In the server we will create, we'll define a *root* variable, which will act as the static file server's root directory.
#### Otimizing data transfer with Stream#pipe()
Although it's important to know how the `fs.ReadStream` works and what flexibility its events provide, Node also provides a higher-level mechanism for performing the same task: `Stream#pipe()`. This method allows you to greatly simplify your server code.
#### Handling server errors
Our static file server is not yet handling errors that could occur as a result of using *fs.ReadStream*. Errors will be thrown in the current server if you access a file that doesn't exist, access a forbidden file, or run into any other file I/O related problem.
In Node, anything that inherits from ***EventEmitter*** has the potential of emitting an *error* event. A stream like *fs.ReadStream*, is simply a specialized *EventEmitter* that contains predefined events such as *data* and *end*. By default, *error* events will be thrown when no listeners are present. This means that if you don't listen for these errors, they'll crash the server.
To prevent errors from killing the server, we need to listen for errors by registring an *error* event handler on the *fs.ReadStream* which responds with the 500 response status indicating an internal server error.
#### Preemptive error handling with fs.stat
The files transferred are static, so the *statt()* system call can be utilized to request information about the files, such as the modification time, byte size, and more. This information is especially important when providing conditional *GET* support, where a browser may issue a request to check its cache is stale.
In [our example](./index.js), we made a call to *fs.stat()* and retrieves information about a file, such as its size, or an error code. If the named file doesn't exist, *fs.stat()* will respond with a value of *ENOENT* in the err.code field, and you can return the error code 404, indicating that the file is not found. If you receive other errors from *fs.stat()*, you can return a generic 500 error code.
