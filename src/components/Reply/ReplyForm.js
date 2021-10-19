import React, { useState } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { Avatar, Grid } from '@mui/material';

import { ReplyTextField } from '../Posts/custom';

const ReplyForm = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  return (
    <Grid container>
      <Grid
        item
        xs={1}
        lg={1}
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <Avatar style={{ width: 32, height: 32, fontSize: 16 }}>
          {user?.username.charAt(0)}
        </Avatar>
      </Grid>
      <Grid item xs={11} lg={11}>
        <form>
          <ReplyTextField
            fullWidth
            placeholder="댓글을 입력해주세요..."
            size="small"
            autoFocus
          ></ReplyTextField>
        </form>
      </Grid>
    </Grid>
  );
};

export default ReplyForm;
