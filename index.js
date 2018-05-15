var express = require('express');
var bodyParser = require('body-parser'); // Charge le middleware de gestion des paramètres
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var app = express();

//Rendu en screencast

var taches = [[1,'tache_1',new Date('1995-12-17T03:24:00'),new Date('1996-12-17T03:24:00'), 'En cours', 'tag'],'tache_2','tache_3']

app.get('/hello', function (req, res) {
    res.send("hello");
})

app.get('/todo/:id', function (req, res) {
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(taches));
})

app.post('/todo/', function (req, res) {

})

app.delete('/todo/id', function (req, res) {

})


app.use(function(req, res, next){

});

app.listen(8080);