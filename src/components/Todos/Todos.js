import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Paper } from '@material-ui/core';
import useStyles from './styles';
import Todo from './Todo/Todo.js';
import TodoHead from './TodoHead/TodoHead';
const Todos = ({ todoId, setTodoId }) => {
  const todos = useSelector((state) => state.todos);
  const classes = useStyles();
  console.log(todos);
  return (
    <Container maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <TodoHead todoId={todoId} setTodoId={setTodoId} />
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            todoId={todoId}
            setTodoId={setTodoId}
          />
        ))}
      </Paper>
    </Container>
  );
};

export default Todos;
