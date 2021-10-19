import React, { useState } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import {
  Avatar,
  Grid,
  Typography,
  IconButton,
  Popper,
  Paper,
  Box,
  Tooltip,
  Button,
} from '@mui/material';
import { MoreHoriz } from '@mui/icons-material';

const Reply = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const nowDate = dayjs().format('ll');
  const [anchorEl, setAnchorEl] = useState(null);

  const popperClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const popperOpen = Boolean(anchorEl);

  return (
    <Grid
      container
      sx={{
        display: 'flex',
        marginBottom: 1,
        ':hover > #replyMore': {
          visibility: 'visible',
        },
      }}
    >
      <Grid
        item
        xs={1}
        lg={1}
        style={{ display: 'flex', alignItems: 'flex-start' }}
      >
        <Avatar
          style={{
            width: 32,
            height: 32,
            fontSize: 16,
          }}
        >
          {user?.username.charAt(0)}
        </Avatar>
      </Grid>
      <Grid
        item
        sx={{
          display: 'flex',
        }}
        direction="column"
      >
        <Box
          style={{
            backgroundColor: '#f0f2f5',
            borderRadius: 20,
            padding: 8,
          }}
        >
          <Typography variant="subtitle2">{user?.username}</Typography>
          <Typography variant="caption">댓글 내용2222</Typography>
        </Box>
        <Typography variant="caption">{nowDate}</Typography>
      </Grid>
      <Grid
        id="replyMore"
        item
        xs={1}
        lg={1}
        sx={{ display: 'flex', alignItems: 'baseline', visibility: 'hidden' }}
      >
        <Tooltip title="수정 또는 삭제" arrow>
          <IconButton aria-describedby="reply-popper" onClick={popperClick}>
            <MoreHoriz />
          </IconButton>
        </Tooltip>
        <Popper id="reply-popper" open={popperOpen} anchorEl={anchorEl}>
          <Paper elevation={2}>
            <Button style={{ color: '#65676b' }}>수정</Button>
            <Button style={{ color: '#65676b' }}>삭제</Button>
          </Paper>
        </Popper>
      </Grid>
    </Grid>
  );
};

export default Reply;
