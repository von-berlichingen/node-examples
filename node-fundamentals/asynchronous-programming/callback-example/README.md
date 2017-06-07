# Callback example

A *callback* is a function passed as an argument to an asynchronous function that describes what to do after the asynchronous operation has completed.

# Our example
To demonstrate the use of callbacks in an application, let's make a simple HTTP server that does the following:
* Pulls the titles of recent posts stored in a file asynchronously.
* Pulls the basic HTML template asynchronously.
* Assemble an HTML page containing the titles.
* Sends the HTML page to the user.