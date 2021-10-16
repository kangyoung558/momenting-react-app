import React from 'react';
import { IconButton } from '@mui/material';
import { AddCircleOutline } from '@material-ui/icons';
import ModalTest from './ModalTest';

const Test = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <IconButton style={{ padding: 0 }} onClick={handleOpen}>
        <AddCircleOutline />
      </IconButton>
      <ModalTest open={open} handleClose={handleClose} />
    </div>
  );
};

export default Test;
