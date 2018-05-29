class Task {
    constructor(title, dateBegin, dateEnd, statut, tags) {
        this.title = title;
        this.dateBegin = dateBegin;
        this.dateEnd = dateEnd;
        this.statut = statut;
        this.tags = tags;
    }
}

module.exports = Task;