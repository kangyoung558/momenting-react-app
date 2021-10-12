import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTodos } from '../../actions/todos';
import { Grid } from '@material-ui/core';
import Todos from '../Todos/Todos';
import useStyles from './styles';
const Home = () => {
  const classes = useStyles();
  const [todoId, setTodoId] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);
  return (
    <Grid container className={classes.marginTop} spacing={2}>
      <Grid item xs={12} lg={5}>
        Post
      </Grid>
      <Grid item xs={12} lg={4}>
        <Todos todoId={todoId} setTodoId={setTodoId} />
      </Grid>
      <Grid item xs={12} lg={3}>
        cal
      </Grid>
    </Grid>
  );
};

export default Home;
