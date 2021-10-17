import { AUTH } from '../constants/actionType';
import * as api from '../api/todoApi';

export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    history.push('/home');
  } catch (error) {
    console.log(error);
    alert('회원정보를 확인해주세요.');
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    history.push('/home');
  } catch (error) {
    console.log(error);
  }
};
