import React from 'react';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import { AddCircleOutline } from '@material-ui/icons';
import ModalTest from './ModalTest';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

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
