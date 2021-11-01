import React, { useState } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  Grid,
  Typography,
  IconButton,
  Divider,
  Popover,
  Paper,
  Dialog,
} from '@mui/material';
import { MoreVert, ModeEditOutline, DeleteOutline } from '@mui/icons-material';
import Form from '../Form/Form';
import { useDispatch } from 'react-redux';
import { PostDeleteBtn, PostUpdateBtn } from '../custom';
import { deletePost } from '../../../actions/posts';
const Post = ({ post, postId, setPostId }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const nowDate = dayjs().format('ll');
  const createdDate = dayjs(post.createdDate).format('ll');
  const [anchorEl, setAnchorEl] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setPostId(post.id);
    setAnchorEl(null);
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const popoverClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const popoverClose = () => {
    setAnchorEl(null);
  };

  const popoverOpen = Boolean(anchorEl);
  return (
    <Card style={{ marginBottom: 12 }}>
      <CardContent>
        <Grid container>
          <Grid
            item
            xs={1}
            lg={1}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <Avatar>{post.writer.charAt(0)}</Avatar>
          </Grid>
          <Grid item xs={10} lg={10} style={{ paddingLeft: 4 }}>
            <Typography variant="body1">{post.writer}</Typography>
            <Typography variant="caption">{createdDate}</Typography>
          </Grid>
          <Grid
            item
            xs={1}
            lg={1}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
            <IconButton aria-describedby="post-popper" onClick={popoverClick}>
              <MoreVert />
            </IconButton>
            <Popover
              id="post-popper"
              open={popoverOpen}
              anchorEl={anchorEl}
              onClose={popoverClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
              <Paper elevation={2}>
                <PostUpdateBtn onClick={handleDialogOpen}>
                  <ModeEditOutline />
                  모먼트 수정
                </PostUpdateBtn>
                <Divider />
                <PostDeleteBtn
                  onClick={() => {
                    dispatch(deletePost(post));
                    popoverClose();
                  }}
                >
                  <DeleteOutline />
                  모먼트 삭제
                </PostDeleteBtn>
              </Paper>
            </Popover>
            <Dialog
              open={dialogOpen}
              onClose={handleDialogClose}
              fullWidth
              maxWidth="sm"
            >
              <Form
                open={dialogOpen}
                setOpen={setDialogOpen}
                handleClose={handleDialogClose}
                postId={postId}
                setPostId={setPostId}
              />
            </Dialog>
          </Grid>
          <Grid item xs={12} lg={12} style={{ marginTop: 8 }}>
            <Typography variant="body2" component="p">
              {post.content}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      {/* <CardMedia component="img" height="200" image={dd || Sample} /> */}
    </Card>
  );
};

export default Post;
