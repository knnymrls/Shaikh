export class Todo {
    /**
     * Creates a new Todo instance
     * @param {String} title 
     */
    constructor(title) {
        this.title = title;
        this.done = false;
    }

    /**
     * Toggles the done status of the Todo
     */
    toggle() {
        this.done = !this.done;
    }
}