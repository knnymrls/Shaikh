export class Todo {
    /**
     * Creates a new Todo instance
     * @param {String} title
     * @param {Number} id
     * @param {String} description'
     * @param {Date} dueDate 
     */
    constructor(title, id, description, dueDate) {
        this.title = title;
        this.id = id;
        this.description = description;
        this.dueDate = dueDate;
        this.done = false;
    }

    /**
     * Toggles the done status of the Todo
     */
    toggle() {
        this.done = !this.done;
    }
}