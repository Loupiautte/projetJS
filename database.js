const dbName = 'todo';
const mongoClient = require('mongodb').MongoClient;

// Allow to create a connection for each query
let executeQuery = function (callback) {
    mongoClient.connect('mongodb://localhost/' + dbName, function (err, client) {
        if (err)
            throw err;
        // Call lambda function pass in parameter
        callback(client);
        client.close();
    });
}

function connectionTest() {
    return new Promise(function (resolve, reject) {
        executeQuery(function (client) {
            if(!client) {
                resolve(false);
            }
            resolve(true);
        })
    })
}

function getAllTasks() {
    return new Promise(function (resolve, reject) {
        executeQuery(function (client) {
            let db = client.db(dbName);
            db.collection(dbName).find({}).toArray(function (findErr, result) {
                if (findErr)
                    throw findErr;
                resolve(result);
            });
        });
    });
}

function addTask(task) {
    return new Promise(function (resolve, reject) {
        executeQuery(function (client) {
            console.log(task);
            let db = client.db(dbName);
            console.log(task);
            db.collection(dbName).insertOne({
                    'title': task.title,
                    'dateBegin': task.dateBegin,
                    'dateEnd': task.dateEnd,
                    'statut': task.statut,
                    'tags': task.tags,
                    'completed': false
                },
                // Callback function
                function (err, inserted) {
                    resolve(inserted.insertedId);
                }
            );
        });
    });
}

function getTask(id){
    return new Promise(function (resolve, reject) {
        executeQuery(function (client) {
            let db = client.db(dbName);
            db.collection(dbName).find({'_id': id}).toArray(function (findErr, result) {
                if (findErr)
                    throw findErr;
                resolve(result);
            });
        });
    });
}

function removeCompletedTasks() {
    return new Promise(function (resolve, reject) {
        executeQuery(function (client) {
            let db = client.db(dbName);
            db.collection(dbName).remove({completed: true}, true);
            resolve();
        });
    });
}

function updateTask(id, task) {
    return new Promise(function (resolve, reject) {
        executeQuery(function (client) {
            let db = client.db(dbName);
            db.collection(dbName).updateOne({'_id': id}, {$set: {
                    'title': task.title,
                    'dateBegin': task.dateBegin,
                    'dateEnd': task.dateEnd,
                    'statut': task.statut,
                    'tags': task.tags,
                    'completed': false
                }});
            resolve();
        });
    });
}

function removeTask(id){
    return new Promise(function (resolve, reject) {
        executeQuery(function (client) {
            let db = client.db(dbName);
            db.collection(dbName).remove({'_id': id});
            resolve();
        });
    });
}

function removeAllTasks() {
    return new Promise(function (resolve, reject) {
        executeQuery(function (client) {
            let db = client.db(dbName);
            db.collection(dbName).remove({});
            resolve();
        });
    });
}

// Functions to export
module.exports.connectionTest = connectionTest;
module.exports.getTask = getTask;
module.exports.getAllTasks = getAllTasks;
module.exports.executeQuery = executeQuery;
module.exports.addTask = addTask;
module.exports.removeCompletedTasks = removeCompletedTasks;
module.exports.updateTask = updateTask;
module.exports.removeTask = removeTask;
module.exports.removeAllTasks = removeAllTasks;
