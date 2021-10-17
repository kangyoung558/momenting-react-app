import React, { useState } from 'react';
import {
  Container,
  Paper,
  Avatar,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from '@mui/material';
import { Close } from '@mui/icons-material';
import { PostFormOpenBtn, DialogCloseBtn } from '../custom';

const Form = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="lg" style={{ padding: 0 }}>
      <Paper elevation={3} style={{ borderRadius: 10 }}>
        <Grid container>
          <Grid item xs={1} lg={1} style={{ display: 'flex', padding: 8 }}>
            <Avatar>{user?.username.charAt(0)}</Avatar>
          </Grid>
          <Grid item xs={11} lg={11} style={{ display: 'flex', padding: 8 }}>
            <PostFormOpenBtn onClick={handleOpen}>
              {user?.username}님 어떤 순간을 영원으로 남기고 싶으신가요?
            </PostFormOpenBtn>
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
              <DialogTitle>
                <Grid container>
                  <Grid
                    item
                    xs={11}
                    lg={11}
                    style={{ display: 'flex', alignItems: 'center' }}
                  >
                    <Typography>MomenTing 만들기</Typography>
                  </Grid>
                  <Grid
                    item
                    xs={1}
                    lg={1}
                    style={{ display: 'flex', justifyContent: 'flex-end' }}
                  >
                    <DialogCloseBtn size="small" onClick={handleClose}>
                      <Close fontSize="small" />
                    </DialogCloseBtn>
                  </Grid>
                </Grid>
              </DialogTitle>
              <DialogContent dividers>
                <Avatar>{user?.username.charAt(0)}</Avatar>
                <Typography>{user?.username}</Typography>
              </DialogContent>
              <DialogActions></DialogActions>
            </Dialog>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Form;
