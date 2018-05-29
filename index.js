const path = require('path');
const ObjectId = require('mongodb').ObjectID;
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let database = require('./database.js');
let Task = require('./task.js');


app.use(express.static(path.join(__dirname, 'client')));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


app.get('/databaseConnectionTest', function (req, res) {
    console.log("Hello !");
    database.connectionTest();
    res.sendStatus(200);
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/client/index.html');
});

app.get('/todo', async function (req, res) {
    console.log("Récupération de toutes les tâches")
    let tasks = await database.getAllTasks();
    res.send(tasks);
});

app.get('/todo/:id', async function (req, res) {
    console.log("Envoi de la tâche : " + req.params.id);
    res.header("Content-Type", 'application/json');
    let task = await database.getTask(req.params.id);
    res.send(task);
});


app.post('/todo/:id', async function (req, res) {
    console.log("Ajout de la tâche : " + req.params.id);
    let task = parseBodyTask(req.body);
    let idInserted = await database.addTask(task);
    res.send(idInserted);
});

app.delete('/todo', function (req, res) {
    console.log("Suppression de toutes les tâches");
    database.removeAllTasks();
    res.sendStatus(200);
});

app.delete('/todo/:id', function (req, res) {
    let id = new ObjectId(req.params.id);
    console.log("Suppression de la tâche : " + req.params.id);
    database.removeTask(id);
    res.sendStatus(200);
});

function parseBodyTask(body) {
    return new Task(body.title, body.dateBegin, body.dateEnd, body.statut, body.tags);
}

app.listen(8080);