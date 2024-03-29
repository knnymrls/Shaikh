<script>
	import { Todo } from '$lib/models/Todo';
	import { TodosStore } from '../stores/todoStore';
	import { getNewId, addTodo, removeTodo } from '$lib/todoActions';

	let title = '';
	let description = '';

	/**
	 * Handles the form submission
	 */
	function handleSubmit() {
		const newTodo = new Todo(title, getNewId(), description, new Date());
		addTodo(newTodo);
		title = '';
		description = '';
	}
</script>

<main>
	<input type="text" bind:value={title} placeholder="Name" />
	<input type="text" bind:value={description} placeholder="Name" />
	<button on:click={handleSubmit}>Add</button>

	{#each $TodosStore as todo (todo.id)}
		<div>
			<h2>{todo.title}</h2>
			<p>{todo.description}</p>
			<p>{todo.dueDate}</p>
			<button on:click={() => removeTodo(todo.id)}>Remove</button>
		</div>
	{/each}
</main>
