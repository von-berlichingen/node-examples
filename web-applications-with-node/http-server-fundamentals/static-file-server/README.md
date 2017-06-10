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
