import React from 'react';
import { Modal } from '@mui/material';
import Form from '../Form/Form';
const ModalForm = ({ open, setOpen, handleClose, todoId, setTodoId }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Form
        handleClose={handleClose}
        setOpen={setOpen}
        todoId={todoId}
        setTodoId={setTodoId}
      />
    </Modal>
  );
};

export default ModalForm;
