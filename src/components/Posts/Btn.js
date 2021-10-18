import React, { useState } from 'react';
import { Button, Dialog } from '@mui/material';
import Form from './Form/Form';
const Btn = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>dsdd</Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <Form handleClose={handleClose} />
      </Dialog>
    </div>
  );
};

export default Btn;
