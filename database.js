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
    taskList[id] = body;
    return 200;
}

module.exports.hello = hello;
module.exports.getAllTasks = getAllTasks;
module.exports.getTask = getTask;
module.exports.updateTask = updateTask;