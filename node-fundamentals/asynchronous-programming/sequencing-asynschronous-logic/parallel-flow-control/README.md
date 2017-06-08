# Implementing parallel flow control
In order to execute a number of asynchronous tasks in parallel, we put the tasks in an array (order of the tasks in unimportant). Each task should call a handler function that will increment the number of completed tasks. When all the tasks are complete, the handler function should perform some subsequent logic.
[word-count.js](./word-count.js) is a simple application that will read the contents of a number of text files and output the frequency of word use throughout the files. Reading the contents of the text files will be done using the asynchronous *readFile* function, so a number of file reads could be done in parallel.
The output will look like the following text:
```
would: 2
wrench: 3
writeable: 1
you: 24
```
