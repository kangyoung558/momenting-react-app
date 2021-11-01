import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../../actions/posts';
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
import { Close, PhotoCamera, HighlightOff } from '@mui/icons-material';

const Form = ({ handleClose, open, setOpen, postId, setPostId }) => {
  const formData = new FormData();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [prevImg, setPrevImg] = useState(null);
  const [imgFile, setImgFile] = useState(null);
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    id: '',
    content: '',
    writer: user?.username,
  });

  const post = useSelector((state) =>
    postId ? state.posts.find((p) => p.id === postId) : null
  );

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (postId) {
      dispatch(updatePost(postData));
    } else {
      dispatch(createPost(postData));
    }
    clear();
    setOpen(false);
  };

  const clear = () => {
    setPostData({ id: '', content: '', writer: user?.username });
  };

  //이미지 프리뷰 부분

  const handleChangeFile = (e) => {
    const reader = new FileReader();
    setImgFile(e.target.files[0]);
    if (e.target.files[0]) {
      reader.onload = (e) => {
        setPrevImg(e.target.result);
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const deleteFilePrevImg = () => {
    setPrevImg(null);
    setImgFile(null);
  };

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <DialogTitle>
        <Grid container>
          <Grid
            item
            xs={11}
            lg={11}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <Typography>{postId ? 'Moment 수정' : 'Moment 작성'}</Typography>
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
            {/* <FormControlLabel
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
            /> */}
          </Grid>
          <Grid item xs={12} lg={12}>
            <PostTextField
              autoFocus
              multiline
              rows={5}
              fullWidth
              placeholder={
                user?.username + `님 어떤 순간을 영원으로 남기고 싶으신가요?`
              }
              value={postData.content}
              onChange={(e) =>
                setPostData({ ...postData, content: e.target.value })
              }
            ></PostTextField>
          </Grid>
          <Grid item xs={12} lg={12}>
            <IconButton
              sx={{
                position: 'absolute',
                top: '270px',
                right: '25px',
                color: 'white',
              }}
              onClick={deleteFilePrevImg}
            >
              <HighlightOff fontSize="large" />
            </IconButton>
            {prevImg && (
              <div>
                <img
                  src={prevImg}
                  alt="img"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
            )}
          </Grid>
          <Grid>
            {/* 사진 업로드 버튼 */}
            {/* <label htmlFor="icon-button-file">
              <input
                accept="image/*"
                id="icon-button-file"
                type="file"
                onChange={handleChangeFile}
                style={{ display: 'none' }}
              />
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <PhotoCamera />
              </IconButton>
            </label> */}
          </Grid>
          <Grid item xs={12} lg={12}>
            {/* 폼 전송 버튼 */}
            <PostSubmitBtn type="submit" fullWidth>
              {postId ? '수정하기' : '영원으로 기록하기'}
            </PostSubmitBtn>
          </Grid>
        </Grid>
      </DialogContent>
    </form>
  );
};

export default Form;
