export default (todos = [], action) => {
  switch (action.type) {
    case 'TODO_FETCH_ALL':
      return action.payload;
    case 'TODO_CREATE':
      return action.payload;
    case 'TODO_UPDATE':
      return action.payload;

    default:
      return todos;
  }
};