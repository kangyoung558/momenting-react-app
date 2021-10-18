import React, { useState } from 'react';
import {
  DialogTitle,
  DialogContent,
  Typography,
  Grid,
  Divider,
  FormControlLabel,
  Checkbox,
  Avatar,
  IconButton,
} from '@mui/material';
import { DialogCloseBtn, PostTextField, PostSubmitBtn } from '../custom';
import { Close, PhotoCamera } from '@mui/icons-material';

const Form = ({ handleClose }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  return (
    <form noValidate autoComplete="off">
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
      <Divider />
      <DialogContent>
        <Grid container>
          <Grid
            item
            xs={1}
            lg={1}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <Avatar>{user?.username.charAt(0)}</Avatar>
          </Grid>
          <Grid item xs={11} lg={11}>
            <Typography>{user?.username}</Typography>
            <FormControlLabel
              label={<Typography variant="caption">나만 보기</Typography>}
              style={{ margin: 0 }}
              control={
                <Checkbox
                  sx={{
                    '& .MuiSvgIcon-root': { fontSize: 16 },
                    padding: 0,
                  }}
                />
              }
            />
          </Grid>
          <Grid item xs={12} lg={12}>
            <PostTextField
              multiline
              rows={5}
              fullWidth
              placeholder={
                user?.username + `님 어떤 순간을 영원으로 남기고 싶으신가요?`
              }
            ></PostTextField>
          </Grid>
          <Grid>
            {/* 사진 업로드 버튼 */}
            <label htmlFor="icon-button-file">
              <input
                accept="image/*"
                id="icon-button-file"
                type="file"
                style={{ display: 'none' }}
              />
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <PhotoCamera />
              </IconButton>
            </label>
          </Grid>
          <Grid item xs={12} lg={12}>
            {/* 폼 전송 버튼 */}
            <PostSubmitBtn fullWidth>영원으로 기록하기</PostSubmitBtn>
          </Grid>
        </Grid>
      </DialogContent>
    </form>
  );
};

export default Form;
