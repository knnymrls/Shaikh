import { writable } from 'svelte/store';
import { Todo } from '$lib/models/Todo';

// Correctly initialize TodosStore with an empty array of Todo objects
export const TodosStore = writable(/** @type {Todo[]} */([]));
