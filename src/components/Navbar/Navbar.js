import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Avatar, Button } from '@material-ui/core';
import useStyles from './styles';

const NavBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  const logout = () => {
    dispatch({ type: 'LOGOUT' });

    history.push('/');
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <AppBar position="static" className={classes.appBar} color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to="/home"
          variant="h6"
          style={{ color: '#F5DF4D', textDecoration: 'none' }}
        >
          MomenTing
        </Typography>
      </div>
      <Toolbar className={classes.toolbar}>
        <div className={classes.profile}>
          <Avatar className={classes.purple} alt={user?.username}>
            {user?.username.charAt(0)}
          </Avatar>
          <Typography className={classes.userName} variant="h6">
            {user?.username}
          </Typography>
          <Button
            variant="contained"
            className={classes.logout}
            style={{ color: '#939597', backgroundColor: '#F5DF4D' }}
            onClick={logout}
          >
            로그아웃
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

NavBar.propTypes = {};

export default NavBar;
