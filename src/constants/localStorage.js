/**
 * Get the todos from local storage.
 * Return the values as JSON.
 */
export const getTodos = () => JSON.parse(localStorage.getItem('todos'));

/**
 * Update the todos in local storage.
 * 
 * @var {Array} todos the array of JSON objects to add.
 */
export const setTodos = (todos) => localStorage.setItem('todos', JSON.stringify(todos));