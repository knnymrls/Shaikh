import { TodosStore } from '../stores/TodoStore';
import { Todo } from '$lib/models/Todo';

/**
 * Adds a new todo to the list.
 * @param {Todo} todo The new todo to add
 */
function addTodo(todo) {
    TodosStore.update(currentTodos => [...currentTodos, todo]);
}

/**
 * Removes a todo from the list.
 * @param {Number} id 
 */
function removeTodo(id) {
    TodosStore.update(currentTodos =>
        currentTodos.filter(todo => todo.id !== id));
}

/**
 * Gets the new id for the todo
 * @returns {Number} The new id for the todo
 */
function getNewId() {
    let newId = 1;
    TodosStore.subscribe(currentTodos => {
        if (currentTodos.length > 0) {
            newId = currentTodos[currentTodos.length - 1].id + 1;
        }
    })();
    return newId;
}

export { addTodo, removeTodo, getNewId };