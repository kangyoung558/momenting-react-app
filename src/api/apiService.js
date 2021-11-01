import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8080' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem('profile')).token
    }`;
  }

  return req;
});

export const fetchTodo = () => API.get('/todo');
export const createTodo = (newTodo) => API.post('/todo', newTodo);
export const updateTodo = (updatedTodo) => API.put('/todo', updatedTodo);
export const deleteTodo = (todo) => API.delete('/todo', { data: todo });

export const signIn = (formData) => API.post('/auth/signin', formData);
export const signUp = (formData) => API.post('/auth/signup', formData);

export const fetchPost = () => API.get('/post');
export const createPost = (newPost) => API.post('/post', newPost);
export const updatePost = (updatedPost) => API.put('/post', updatedPost);
export const deletePost = (post) => API.delete('/post', { data: post });
