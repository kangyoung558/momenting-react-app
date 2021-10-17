import { AUTH, LOGOUT } from '../constants/actionType';

const authReducer = (state = { auhtData: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
      return { ...state, auhtData: action?.data };
    case LOGOUT:
      localStorage.clear();
      return { ...state, auhtData: null };
    default:
      return state;
  }
};

export default authReducer;
