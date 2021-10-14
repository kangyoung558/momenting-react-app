import axios from 'axios';

const url = 'http://localhost:8080/todo';

export const fetchTodo = () => axios.get(url);
export const createTodo = (newTodo) => axios.post(url, newTodo);
export const updateTodo = (updatedTodo) => axios.put(url, updatedTodo);
export const deleteTodo = (todo) => axios.delete(url, { data: todo });
