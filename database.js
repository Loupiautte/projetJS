var taskList = [];

taskList[2] = {
    "id": 2,
    "title": "L'aile ou la cuisse",
    "dateBegin": "02/01/2016",
    "dateEnd": "02/01/2017",
    "statut": "En cours",
    "tags": "Humour"
};

function hello() {
    return 'hello';
}

function getAllTasks() {
    return taskList;
}

function getTask(id){
    return taskList[id];
}

function updateTask(id, body){
    //TODO Vérifier le body
    taskList[id] = body;
    return 200;
}

function deleteTask(id){
    //TODO
    delete taskList[id];
    return 200;
}

function deleteAllTasks(){
    for(var i= 0; i < taskList.length; i++)
    {
        delete taskList[i];
    }
    return 200;
}

module.exports.hello = hello;
module.exports.getAllTasks = getAllTasks;
module.exports.getTask = getTask;
module.exports.updateTask = updateTask;
module.exports.deleteTask = deleteTask;
module.exports.deleteAllTasks = deleteAllTasks;