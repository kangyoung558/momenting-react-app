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
  Popper,
  Paper,
  Dialog,
  Collapse,
  Button,
} from '@mui/material';
import {
  MoreVert,
  ThumbUpAltOutlined,
  ChatBubbleOutline,
  ThumbUp,
  ModeEditOutline,
  DeleteOutline,
} from '@mui/icons-material';
import Form from '../Form/Form';
import Sample from '../../../img/sample.jpg';
import {
  PostLikeBtn,
  PostReplyBtn,
  PostDeleteBtn,
  PostUpdateBtn,
  ExpandMore,
} from '../custom';
import ReplyForm from '../../Reply/ReplyForm';
import Reply from '../../Reply/Reply';

const Post = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const nowDate = dayjs().format('ll');
  const [anchorEl, setAnchorEl] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const popperClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const popperOpen = Boolean(anchorEl);

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
            <Avatar>{user?.username.charAt(0)}</Avatar>
          </Grid>
          <Grid item xs={10} lg={10} style={{ paddingLeft: 4 }}>
            <Typography variant="body1">{user?.username}</Typography>
            <Typography variant="caption">{nowDate}</Typography>
          </Grid>
          <Grid item xs={1} lg={1}>
            <IconButton aria-describedby="post-popper" onClick={popperClick}>
              <MoreVert />
            </IconButton>
            <Popper id="post-popper" open={popperOpen} anchorEl={anchorEl}>
              <Paper elevation={2}>
                <PostUpdateBtn onClick={handleDialogOpen}>
                  <ModeEditOutline />
                  모먼트 수정
                </PostUpdateBtn>
                <Dialog
                  open={dialogOpen}
                  onClose={handleDialogClose}
                  fullWidth
                  maxWidth="sm"
                >
                  <Form handleClose={handleDialogClose} />
                </Dialog>
                <Divider />
                <PostDeleteBtn>
                  <DeleteOutline />
                  모먼트 삭제
                </PostDeleteBtn>
              </Paper>
            </Popper>
          </Grid>
          <Grid item xs={12} lg={12} style={{ marginTop: 8 }}>
            <Typography variant="body2" component="p">
              군인·군무원·경찰공무원 기타 법률이 정하는 자가 전투·훈련등
              직무집행과 관련하여 받은 손해에 대하여는 법률이 정하는 보상외에
              국가 또는 공공단체에 공무원의 직무상 불법행위로 인한 배상은 청구할
              수 없다. 국가안전보장회의는 대통령이 주재한다.
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardMedia component="img" height="200" image={Sample} />
      <CardContent>
        <Grid container>
          <Grid item xs={6} lg={6} style={{ display: 'flex' }}>
            <ThumbUp style={{ color: '#F5DF4D' }} fontSize="small" />
            <Typography variant="subtitle2" style={{ marginLeft: 4 }}>
              10개
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            lg={6}
            style={{ display: 'flex', justifyContent: 'flex-end' }}
          >
            <PostReplyBtn
              onClick={handleExpandClick}
              aria-label="show more"
              sx={{ padding: 0 }}
            >
              <Typography variant="subtitle2">댓글 2개</Typography>
            </PostReplyBtn>
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
      <CardActions>
        <Grid container>
          <Grid item xs={6} lg={6}>
            <PostLikeBtn fullWidth>
              <ThumbUpAltOutlined />
              &nbsp; 좋아요
            </PostLikeBtn>
          </Grid>
          <Grid item xs={6} lg={6}>
            <PostReplyBtn
              fullWidth
              onClick={handleExpandClick}
              aria-label="show more"
            >
              <ChatBubbleOutline />
              &nbsp; 댓글달기
            </PostReplyBtn>
          </Grid>
        </Grid>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Divider />
        <CardContent>
          <Reply />
          <Reply />
          <ReplyForm />
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Post;
