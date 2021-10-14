import React from 'react';
import { AppBar, Toolbar, Typography, Link } from '@material-ui/core';
import useStyles from './styles';
const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Link href="/home" underline="none" color="inherit">
          <Typography variant="h6" component="div">
            MomenTing
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

NavBar.propTypes = {};

export default NavBar;
