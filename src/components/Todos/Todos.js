import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Paper } from '@material-ui/core';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import useStyles from './styles';
import Todo from './Todo/Todo.js';
import TodoHead from './TodoHead/TodoHead';
const Todos = ({ todoId, setTodoId }) => {
  const todos = useSelector((state) => state.todos);
  const today = dayjs().get('date');
  console.log(todos);
  const todayTodos = todos.filter(
    (todo) => dayjs(todo.endDate).get('date') - today >= 0
  );
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Paper className={classes.paper} elevation={3}>
        <TodoHead todoId={todoId} setTodoId={setTodoId} todos={todos} />
        {todayTodos.map((todo) => (
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
