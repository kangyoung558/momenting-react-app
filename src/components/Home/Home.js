import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getTodos } from '../../actions/todos';
import { getPosts } from '../../actions/posts';
import { Grid } from '@material-ui/core';
import Todos from '../Todos/Todos';
import Navbar from '../Navbar/Navbar';
import useStyles from './styles';
import Posts from '../Posts/Posts';
const Home = () => {
  const classes = useStyles();
  const [todoId, setTodoId] = useState(null);
  const [postId, setPostId] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getTodos(history));
    dispatch(getPosts(history));
  }, [postId, todoId, dispatch]);

  return (
    <>
      <Navbar />
      <Grid container className={classes.marginTop}>
        <Grid item xs={12} lg={6} style={{ paddingInline: 8 }}>
          <Posts postId={postId} setPostId={setPostId} />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Todos todoId={todoId} setTodoId={setTodoId} />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
