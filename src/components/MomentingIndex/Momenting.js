import { Box, Grid } from "@material-ui/core";
import React from "react";
import Auth from "../Auth/Auth";
import useStyles from "./styles";
const Momenting = () => {
  const classes = useStyles();
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={5}>
        소개영역
      </Grid>
      <Grid item xs={7}>
        <Auth />
      </Grid>
    </Grid>
  );
};

export default Momenting;
