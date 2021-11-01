import {
  POST_CREATE,
  POST_FETCH_ALL,
  POST_UPDATE,
  POST_DELETE,
} from '../constants/actionType';

// eslint-disable-next-line import/no-anonymous-default-export
export default (posts = [], action) => {
  switch (action.type) {
    case POST_FETCH_ALL:
      return action.payload;
    case POST_CREATE:
      return action.payload;
    case POST_UPDATE:
      return action.payload;
    case POST_DELETE:
      return posts.filter((post) => post !== action.payload);
    default:
      return posts;
  }
};
