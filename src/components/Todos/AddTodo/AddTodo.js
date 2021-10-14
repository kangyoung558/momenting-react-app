import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
import { AddCircleOutline } from '@material-ui/icons';
import { createTodo, updateTodo } from '../../../actions/todos';
import ModalForm from '../Modal/ModalForm';

const AddTodo = ({ todoId, setTodoId }) => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton style={{ padding: 0 }} onClick={handleOpen}>
        <AddCircleOutline />
      </IconButton>
      <ModalForm open={open} setOpen={setOpen} handleClose={handleClose} />
    </div>
  );
};

export default AddTodo;
