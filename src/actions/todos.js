import {
  TODO_CREATE,
  TODO_FETCH_ALL,
  TODO_UPDATE,
  TODO_DELETE,
} from '../constants/actionType';
import * as api from '../api/todoApi';

//액션 생성자
export const getTodos = (history) => async (dispatch) => {
  try {
    const { data } = await api.fetchTodo();
    dispatch({ type: TODO_FETCH_ALL, payload: data.data });
  } catch (error) {
    console.log(error);
    if (error.response.status === 403) {
      alert('로그인 후에 이용해 주세요~~');
      history.push('/');
    }
  }
};

export const createTodo = (todo) => async (dispatch) => {
  try {
    const { data } = await api.createTodo(todo);
    console.log(data);
    dispatch({ type: TODO_CREATE, payload: data.data });
  } catch (error) {
    console.log(error);
  }
};

export const updateTodo = (todo) => async (dispatch) => {
  try {
    const { data } = await api.updateTodo(todo);

    dispatch({ type: TODO_UPDATE, payload: data.data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodo = (todo) => async (dispatch) => {
  try {
    await api.deleteTodo(todo);

    dispatch({ type: TODO_DELETE, payload: todo });
  } catch (error) {
    console.log(error);
  }
};
