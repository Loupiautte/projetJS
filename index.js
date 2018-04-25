var express = require('express');
var bodyParser = require('body-parser'); // Charge le middleware de gestion des paramètres
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var app = express();

//Rendu en screencast

var taches = ['tache_1','tache_2','tache_3']

app.get('/todo', function (req, res) {
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(taches));
})

app.post('/todo/ajouter', function (req, res) {

})

app.delete('/todo/supprimer/:id', function (req, res) {

})


app.use(function(req, res, next){

});

app.listen(8080);