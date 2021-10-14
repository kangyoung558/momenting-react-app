import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { IconButton } from '@mui/material';
import { AddCircleOutline } from '@material-ui/icons';
import { createTodo, updateTodo } from '../../../actions/todos';
import Form from '../Form/Form';

const AddTodo = ({ todoId, setTodoId }) => {
  const [todoData, setTodoData] = useState({
    id: '',
    title: '',
    content: '',
    endDate: '',
  });
  const todo = useSelector((state) =>
    todoId ? state.todos.find((p) => p.id === todoId) : null
  );
  const nowDate = dayjs().format('YYYY-MM-DD');

  //모먼트 날짜 상태 관리
  const [date, setDate] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (todo) setTodoData(todo);
  }, [todo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoId) {
      dispatch(updateTodo(todoData));
    } else {
      dispatch(createTodo(todoData));
    }
    clear();
    setOpen(false);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    clear();
  };

  //할일 추가 모달창 닫았을때  모든 텍스트필드값 초기화
  const clear = () => {
    setTodoData({ id: '', title: '', content: '', endDate: '' });
    setDate(null);
  };

  return (
    <div>
      <IconButton style={{ padding: 0 }} onClick={handleOpen}>
        <AddCircleOutline />
      </IconButton>
      <Form
        open={open}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        todoData={todoData}
        setTodoData={setTodoData}
        date={date}
        setDate={setDate}
      />
    </div>
  );
};

export default AddTodo;
