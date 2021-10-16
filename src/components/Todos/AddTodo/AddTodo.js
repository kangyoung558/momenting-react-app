import React, { useState } from 'react';
import { Fab } from '@mui/material';
import { Add } from '@material-ui/icons';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ModalForm from '../Modal/ModalForm';

const theme = createTheme({
  palette: {
    secondary: {
      main: '#F5DF4D',
    },
  },
});

const AddTodo = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Fab
          size="small"
          color="secondary"
          aria-label="add"
          onClick={handleOpen}
        >
          <Add style={{ color: '#939597' }} />
        </Fab>
      </ThemeProvider>
      <ModalForm open={open} setOpen={setOpen} handleClose={handleClose} />
    </div>
  );
};

export default AddTodo;
