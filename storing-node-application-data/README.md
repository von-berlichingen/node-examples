# Storing Node application data
Almost every application requiers data storage of some kind, and the applications we build with Node are no different. The choice of an appropriate storage mechanism depends on five factors:
* What data is being stored
* How quickly data needs to be read and written
* How much data exists
* How long data needs to be queried
* How long and reliably the data needs to be stored

In this part, we'll see three different options:
* Storing data without installing and configuring a DBMS
* Storing data using a relational DBMS (MySQL and PostgreSQL)
* Storing data using NoSQL databases (Redis, MongoDB/Mongoose)
