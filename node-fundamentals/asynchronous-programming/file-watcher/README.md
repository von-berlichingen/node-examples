# File Watcher (extending event emitter)
If you'd like to build upon the event emitter's behavior, you can create a new JS class that inherits from the event emitter. For example, you could create a class called *Watcher* that would process files placed in a specified filesystem directory. You'd then use this class to create a utility that would watch a filesystem directory (renaming any files placed in it to lowercase) and then copy the files into a separate directory.
There are three steps to extending an event emitter:
1. Creating a class constructor
2. Inheriting the event emitter's behaviour
3. Extending the behaviour
