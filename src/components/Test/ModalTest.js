import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';

const ModalTest = ({ open, handleClose }) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth="fullWidth"
      >
        <DialogTitle>할 일 추가</DialogTitle>
        <DialogContent>
          <form noValidate autoComplete="off">
            <TextField
              name="title"
              variant="standard"
              label="제목"
              fullWidth
            ></TextField>
            <TextField
              name="content"
              variant="standard"
              label="내용"
              fullWidth
            ></TextField>
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="success"
            type="submit"
            fullWidth
            style={{ marginTop: 20 }}
          >
            할 일 추가하기
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ModalTest;
