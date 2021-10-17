import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getTodos } from '../../actions/todos';
import { Grid } from '@material-ui/core';
import Todos from '../Todos/Todos';
import Navbar from '../Navbar/Navbar';
import useStyles from './styles';
import Posts from '../Posts/Posts';
const Home = () => {
  const classes = useStyles();
  const [todoId, setTodoId] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getTodos(history));
  }, [todoId, dispatch]);
  return (
    <>
      <Navbar />
      <Grid container className={classes.marginTop}>
        <Grid item xs={12} lg={5} style={{ paddingInline: 8 }}>
          <Posts />
        </Grid>
        <Grid item xs={12} lg={4}>
          <Todos todoId={todoId} setTodoId={setTodoId} />
        </Grid>
        <Grid item xs={12} lg={3}>
          dsdsd
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
