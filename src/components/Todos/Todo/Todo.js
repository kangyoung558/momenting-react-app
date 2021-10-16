import React from 'react';
import { useDispatch } from 'react-redux';
import { Checkbox, Paper, Typography, Grid, IconButton } from '@mui/material';
import {
  CheckCircleOutline,
  RadioButtonUncheckedOutlined,
  DeleteOutline,
} from '@mui/icons-material';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import useStyles from './styles';
import UpdateTodo from '../UpdateTodo/UpdateTodo';
import { deleteTodo, updateTodo } from '../../../actions/todos';

const Todo = ({ todo, todoId, setTodoId }) => {
  const classes = useStyles(todo);
  const dispatch = useDispatch();
  const startDate = dayjs(todo.createdDate).format('MM월 DD일');
  const endDate = dayjs(todo.endDate).format('MM월 DD일');
  const doneTodo = (e) => {
    todo.done = !todo.done;
    console.log(todo);
    dispatch(updateTodo(todo));
  };
  return (
    <Paper
      elevation={0}
      variant="outlined"
      style={{ marginTop: 8, textAlign: 'left', padding: 10, display: 'flex' }}
    >
      <Grid container alignItems="center" className={classes.listItem}>
        <Grid item lg={2} style={{ textAlign: 'center' }}>
          <Checkbox
            icon={<RadioButtonUncheckedOutlined />}
            checkedIcon={<CheckCircleOutline />}
            checked={todo.done}
            style={{ padding: 0 }}
            onChange={doneTodo}
          />
        </Grid>
        <Grid item lg={8} className={classes.checked} id={todo.id}>
          <Typography style={{ fontSize: 12 }}>{todo.title}</Typography>
          <Typography style={{ fontWeight: 'bold' }}>{todo.content}</Typography>
          <Typography style={{ fontSize: 12, fontWeight: 'lighter' }}>
            {startDate} 부터 {endDate} 까지
          </Typography>
        </Grid>
        <Grid
          item
          lg={2}
          container
          direction="column"
          id="button"
          className={classes.button}
        >
          <Grid>
            <UpdateTodo todoId={todoId} setTodoId={setTodoId} todo={todo} />
          </Grid>
          <Grid>
            <IconButton onClick={() => dispatch(deleteTodo(todo))}>
              <DeleteOutline />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Todo;
