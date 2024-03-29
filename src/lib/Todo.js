export class Todo {
    /**
     * Creates a new Todo instance
     * @param {String} title
     * @param {String} description'
     * @param {Date} dueDate 
     */
    constructor(title, description, dueDate) {
        this.title = title;
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