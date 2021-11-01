import { styled } from '@mui/material/styles';
import { Button, IconButton, TextField } from '@mui/material';

export const PostFormOpenBtn = styled(Button)(({ theme }) => ({
  backgroundColor: '#f5f5f5',
  color: '#9e9e9e',
  justifyContent: 'flex-start',
  '&:hover': {
    backgroundColor: '#e0e0e0',
  },
  borderRadius: 20,
}));

export const DialogCloseBtn = styled(IconButton)(({ theme }) => ({
  backgroundColor: '#f5f5f5',
  color: '#9e9e9e',
  '&:hover': {
    backgroundColor: '#e0e0e0',
  },
}));

export const PostTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: 'none',
    },
  },
}));

export const PostSubmitBtn = styled(Button)(({ theme }) => ({
  backgroundColor: '#F5DF4D',
  color: '#9e9e9e',
  '&:hover': {
    backgroundColor: '#E4CB24',
  },
}));

export const PostLikeBtn = styled(Button)(({ theme }) => ({
  color: '#65676b',
  '&:hover': {
    backgroundColor: '#e0e0e0',
  },
}));

export const PostUnLikeBtn = styled(Button)(({ theme }) => ({
  color: '#f5df4d',
  '&:hover': {
    backgroundColor: '#e0e0e0',
  },
}));

export const PostReplyBtn = styled(Button)(({ theme }) => ({
  color: '#65676b',
  '&:hover': {
    backgroundColor: '#e0e0e0',
  },
}));

export const PostUpdateBtn = styled(Button)(({ theme }) => ({
  color: '#65676b',
  '&:hover': {
    backgroundColor: '#e0e0e0',
  },
}));
export const PostDeleteBtn = styled(Button)(({ theme }) => ({
  color: '#65676b',
  '&:hover': {
    backgroundColor: '#e0e0e0',
  },
}));

export const ReplyTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: 'none',
    },
  },
  backgroundColor: '#f0f2f5',
  borderRadius: 20,
}));

export const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <PostReplyBtn {...other} />;
});
