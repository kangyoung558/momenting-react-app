import { combineReducers } from 'redux';
import todos from './todos';
import posts from './psots';
import auth from './auth';
export default combineReducers({ posts, todos, auth });
