## Description
The **To do list** project is a WEB application made with Node.js and no third party API (Such as JQuery, Angular...) on which you can handle a list of tasks in various ways.
You can :
- Get all your tasks as a list
- Add a task
- Check a task
- Remove all completed tasks

### Communication
As mentionned all ***Client - Server*** communications are made with Javascript using the fetch API and the ***Async - Await*** JS's expressions.

## Using the project

### Starting the database
In the ~/Mongo folder, there's an example of database you can start using the following shell command :

`mongod --dbpath "~\Mongo"`

### Starting the server
Once the database's up, you can start the Node.js server using the following shell command :

`node ~/server.js`

## Content of the project
#### ~/Mongo
Contains an example of database that can be used for tests or W/E you want
#### ~/client
Contains all the static files sent to the client when he reaches the route **GET: /**
#### ~/mocks
Contains the mocking of the server and of the database
#### ~/spec
Contains all jasmine test files

