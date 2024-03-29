<script>
	import { Todo } from '$lib/Todo';

	let title = '';
	let desciption = '';

	/**
	 * @type {Todo[]} todos
	 */
	let todos = [];

	/**
	 * Adds a new todo to the list of todos
	 * @param {Todo} todo The todo to add
	 */
	function addTodo(todo) {
		todos = [...todos, todo];
	}

	/**
	 * Removes a todo from the list of todos
	 * @param {number} id The id of the todo to remove
	 */
	function removeTodo(id) {
		todos = todos.filter((todo) => id !== todo.id);
	}

	/**
	 * Gets the new id for a todo
	 * @returns {number} The new id
	 */
	function getNewId() {
		// Reindexes the todos
		todos = todos.map((todo) => ({ ...todo, toggle: () => {} }));

		if (todos.length === 0) return 1;
		// The new index is one more than the highest current index
		return todos[todos.length - 1].id + 1;
	}

	/**
	 * Handles the form submission
	 */
	function handleSubmit() {
		let newTodo = new Todo(title, getNewId(), desciption, new Date());
		addTodo(newTodo);
	}
</script>

<main>
	<input type="text" bind:value={title} placeholder="Name" />
	<input type="text" bind:value={desciption} placeholder="Name" />
	<button on:click={handleSubmit}>Add</button>

	{#each todos as todo (todo.id)}
		<div>
			<h2>{todo.title}</h2>
			<p>{todo.description}</p>
			<p>{todo.dueDate}</p>
			<button on:click={() => removeTodo(todo.id)}>Remove</button>
		</div>
	{/each}
</main>
