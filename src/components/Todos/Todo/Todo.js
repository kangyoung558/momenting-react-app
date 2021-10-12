import React from 'react';
import { Checkbox, Paper, Typography, Grid, IconButton } from '@mui/material';
import {
  CheckCircleOutline,
  RadioButtonUncheckedOutlined,
  DeleteOutline,
  EditOutlined,
} from '@mui/icons-material';
import useStyles from './styles';
import UpdateTodo from '../UpdateTodo/UpdateTodo';

const Todo = ({ todo, todoId, setTodoId }) => {
  const classes = useStyles(todo);
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
          />
        </Grid>
        <Grid item lg={8} className={classes.checked} id={todo.id}>
          <Typography style={{ fontSize: 12 }}>{todo.title}</Typography>
          <Typography style={{ fontWeight: 'bold' }}>{todo.content}</Typography>
          <Typography style={{ fontSize: 12, fontWeight: 'lighter' }}>
            0월 0일 부터 0월 0일 까지
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
            {/* <UpdateTodo todoId={todoId} setTodoId={setTodoId} /> */}
            <IconButton
              style={{ color: '#20c997' }}
              onClick={() => setTodoId(todo.id)}
            >
              <EditOutlined />
            </IconButton>
          </Grid>
          <Grid>
            <IconButton>
              <DeleteOutline />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Todo;
