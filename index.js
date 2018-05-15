var express = require('express');
var app = express();
var bodyParser = require('body-parser'); // Charge le middleware de gestion des paramètres
var database	= require('./database.js');

app.use(bodyParser.json());

app.get('/hello', function (req, res) {
    const test = database.hello();
    res.send(test);
})

app.get('/todo', function (req, res) {
    res.header("Content-Type",'application/json');
    const tasksList = database.getAllTasks();
    res.send(JSON.stringify(tasksList));
})

app.get('/todo/:id', function (req, res) {
    res.header("Content-Type",'application/json');
    var task = database.getTask(req.params.id);
    res.send(task);
})


app.post('/todo/:id', function (req, res) {
    console.log(req.body.test);
})

app.delete('/todo/id', function (req, res) {

})


app.use(function(req, res, next){

});

app.listen(8080);