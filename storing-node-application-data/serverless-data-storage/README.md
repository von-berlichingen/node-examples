# Serverless data storage
From the standpoint of system administration, the most convenient storage mechanisms are those that do not require to maintain a DBMS, such as in-memory storage and file-based storage. Removing the need to install and configure a DBMS makes the applications we build much easier to install.
In this part, we'll learn when and how to use in-memory storage and file-based storage, both ow which are primary forms of serverless data storage.
## In-memory storage
In-memory storage uses variables to store data. Reading and writing this data is fast, but as we mentioned earlier, you will lose the data during server server and application restarts.
The ideal use of in-memory storage is for small bits of frequently accessed data.
