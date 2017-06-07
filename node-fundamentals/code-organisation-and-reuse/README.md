# Modules
Node Modules bundle up code for reuse, but they don't alter **global scope**.
They are [CommonJs](http://requirejs.org/docs/commonjs.html) implementation.
Node modules allow to select what function and variables from the included file are exposed to the application.
Node modules are included using *require*.
Modules use *exports* to make things available.
## exports vs module.exports
* exports is an alias to module.exports.
* node automatically creates it as a convenient shortcut.
* For assigning named properties, use either one.
