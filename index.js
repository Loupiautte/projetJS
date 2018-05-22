var express = require('express');
var app = express();
var bodyParser = require('body-parser'); // Charge le middleware de gestion des paramètres
var database	= require('./database.js');


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


app.get('/hello', function (req, res) {
    console.log("Hello !");
    const test = database.hello();
    res.send(test);
})

app.get('/todo', function (req, res) {
    console.log("Envoi de toutes les tâches");
    res.header("Content-Type",'application/json');
    const tasksList = database.getAllTasks();
    res.send(JSON.stringify(tasksList));
})

app.get('/todo/:id', function (req, res) {
    console.log("Envoi de la tâche : " + req.params.id);
    res.header("Content-Type",'application/json');
    var task = database.getTask(req.params.id);
    res.send(task);
})


app.post('/todo/:id', function (req, res) {
    console.log("Ajout de la tâche : " + req.params.id);
    code = database.updateTask(req.params.id, req.body);
    res.status(code).send();
})

app.delete('/todo/:id', function (req, res) {
    console.log("Suppression de la tâche : " + req.params.id);
    code = database.deleteTask(req.params.id);
    res.status(code).send();
})

app.delete('/todo', function (req, res) {
    console.log("Suppression de toutes les tâches");
    code = database.deleteAllTasks();
    res.status(code).send();
})


app.listen(8080);