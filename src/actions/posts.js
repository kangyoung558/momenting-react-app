import {
  POST_CREATE,
  POST_FETCH_ALL,
  POST_UPDATE,
  POST_DELETE,
} from '../constants/actionType';
import * as api from '../api/apiService';

export const getPosts = (history) => async (dispatch) => {
  try {
    const { data } = await api.fetchPost();
    dispatch({ type: POST_FETCH_ALL, payload: data.data });
  } catch (error) {
    console.log(error);
    if (error.response.status === 403) {
      alert('로그인 후에 이용해 주세요~~');
      history.push('/');
    }
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    console.log(data);
    dispatch({ type: POST_CREATE, payload: data.data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(post);

    dispatch({ type: POST_UPDATE, payload: data.data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (post) => async (dispatch) => {
  try {
    await api.deletePost(post);
    dispatch({ type: POST_DELETE, payload: post });
  } catch (error) {
    console.log(error);
  }
};
