import { Box, Grid } from '@material-ui/core';
import React from 'react';
import Auth from '../Auth/Auth';
const Momenting = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Grid container justifyContent="center" alignItems="center">
        <Grid
          item
          xs={12}
          lg={7}
          style={{ backgroundColor: 'white', textAlign: 'center' }}
        >
          소개영역
        </Grid>
        <Grid item xs={12} lg={5}>
          <Auth />
        </Grid>
      </Grid>
    </div>
  );
};

export default Momenting;
