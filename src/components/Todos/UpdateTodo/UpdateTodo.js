import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import { EditOutlined } from '@material-ui/icons';
import ModalForm from '../Modal/ModalForm';

const UpdateTodo = ({ todo, todoId, setTodoId }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setTodoId(todo.id);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton style={{ color: '#20c997' }} onClick={handleOpen}>
        <EditOutlined />
      </IconButton>
      <ModalForm
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
        todoId={todoId}
        setTodoId={setTodoId}
      />
    </div>
  );
};

export default UpdateTodo;
