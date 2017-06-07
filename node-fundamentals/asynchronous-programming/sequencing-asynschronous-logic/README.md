# Chanllenges with asynchronous development
Node's event loop keeps track of asynchronous logic that hasn't completed processing. As long as there is uncompleted asynchronous logic, the Node process won't exit. A continually running Node process is desirable behavior for something like a web server, but it is not desirable to continue running processes that are expected to end after a periond of time, like command-lines. The event loop will keep track of any database connections until they are closed, preventing Node from exiting.
Application variables can also change unexpectedly if you are not careful. async-example-1.js shows an example of how the order in which asynchronous code executes can lead to confusion. Because the example is asynchronous, the value of the *color* variable changes before `console.log` executes, and the output is `The color is green`.
To **"freeze"** the contents of the *color* variable, you can modify your logic and use a ***JavaScript closure***. In async-example-2.js, you wrap the call to *asyncFunction in an anonymous function that takes a *color* argument. You then execute the anonymous function immediately, sending it the current contents of *color*. By making *color* an argument for the anonymous function, it becomes local to the scope of that function, and when the value of *color* is changed outside of the anonymous function, the local version is unaffected.
# Sequencing asynchronous logic
During the execution of an asynchronous program, there are some tasks that can happen any time, independant of what the rest of the program is doing and without causing problems. But sometimes, there are also some tasks that should happen only before/after certain other tasks.
The concept of sequencing groups of asunchronous tasks is called ***flow control***. There are two types of flow control:
* **serial**: tasks that need to happen one after the other.
* **parallel** tasks that do not need to happen one after the other. It is not necessarily important when these tasks start and stop relative to one another, but they should all be completed before further logic executes.

In this part we'll see:
* When to use serial flow control
* How to implement serial flow control
* How to implement parallel flow control
* How to leverage third-party modules for flow control
