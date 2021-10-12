import React from 'react';
import { Grid, Typography, Divider } from '@mui/material';
import AddTodo from '../AddTodo/AddTodo';
import useStyles from './styles';
const TodoHead = ({ todoId, setTodoId }) => {
  const classes = useStyles();
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
            2021년10월07일
          </Typography>
          <Typography
            className={classes.typography}
            component="div"
            style={{ fontSize: 14 }}
          >
            목요일
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
            할 일 n개 남음
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
