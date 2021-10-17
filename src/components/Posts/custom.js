import React from 'react';
import { styled } from '@mui/material/styles';
import { Button, IconButton } from '@mui/material';

export const PostFormOpenBtn = styled(Button)(({ theme }) => ({
  backgroundColor: '#f5f5f5',
  width: '630px',
  color: '#9e9e9e',
  justifyContent: 'flex-start',
  '&:hover': {
    backgroundColor: '#e0e0e0',
  },
}));

export const DialogCloseBtn = styled(IconButton)(({ theme }) => ({
  backgroundColor: '#f5f5f5',
  color: '#9e9e9e',
  '&:hover': {
    backgroundColor: '#e0e0e0',
  },
}));
