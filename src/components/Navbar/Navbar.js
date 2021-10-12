import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import useStyles from "./styles";
const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" component="div">
          MomenTing
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

NavBar.propTypes = {};

export default NavBar;
