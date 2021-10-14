import React from 'react';
import { Grid, Typography, Divider } from '@mui/material';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import AddTodo from '../AddTodo/AddTodo';
import useStyles from './styles';
const TodoHead = ({ todos, todoId, setTodoId }) => {
  const classes = useStyles();
  const nowDate = dayjs().format('ll');
  const nowDay = dayjs().format('dddd');
  console.log(todos);
  const undoneTodo = todos.filter((todo) => !todo.done);

  return (
    <>
      <Grid container>
        <Grid item lg={10}>
          <Typography
            className={classes.typography}
            variant="h5"
            component="div"
            style={{ fontWeight: 'bold' }}
          >
            {nowDate}
          </Typography>
          <Typography
            className={classes.typography}
            component="div"
            style={{ fontSize: 14 }}
          >
            {nowDay}
          </Typography>
          <Typography
            className={classes.typography}
            component="div"
            style={{
              color: '#20c997',
              marginTop: 30,
              marginBottom: 10,
              fontWeight: 'bold',
            }}
          >
            할 일 {undoneTodo.length}개 남음
          </Typography>
        </Grid>
        <Grid item lg={2} style={{ textAlign: 'end' }}>
          <AddTodo todoId={todoId} setTodoId={setTodoId} />
        </Grid>
      </Grid>
      <Divider />
    </>
  );
};

export default TodoHead;
