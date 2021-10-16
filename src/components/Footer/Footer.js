import React from 'react';
import { Typography } from '@mui/material';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
const Footer = () => {
  const date = dayjs().get('year');
  return (
    <Typography variant="body1" color="#8a8d91" style={{ textAlign: 'center' }}>
      {'Copyright &copy;'} MomenTing, {date} {'.'}
    </Typography>
  );
};

export default Footer;
