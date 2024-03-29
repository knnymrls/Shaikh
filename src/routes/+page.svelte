<script>
	import { Todo } from '$lib/Todo';

	let todo = new Todo('Kenny', 'Do the dishes', new Date(2023, 9, 13));
</script>

<h1>{todo.title} {todo.description} {todo.dueDate}</h1>
