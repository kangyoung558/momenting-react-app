import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ko } from 'dayjs/locale/ko';
import dayjs from 'dayjs';
import {
  Paper,
  Typography,
  TextField,
  Button,
  IconButton,
  Grid,
} from '@mui/material';
import { CancelOutlined } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DateAdapter from '@mui/lab/AdapterDayjs';
import { DatePicker, LocalizationProvider } from '@mui/lab';
import useStyles from './styles';
import { createTodo, updateTodo } from '../../../actions/todos';

const theme = createTheme({
  palette: {
    success: {
      main: '#20c997',
    },
  },
});

const Form = ({ open, setOpen, handleClose, todoId, setTodoId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [todoData, setTodoData] = useState({
    id: '',
    title: '',
    content: '',
    createdDate: '',
    endDate: '',
  });

  const todo = useSelector((state) =>
    todoId ? state.todos.find((p) => p.id === todoId) : null
  );

  useEffect(() => {
    if (todo) setTodoData(todo);
  }, [todo]);

  const [date, setDate] = useState(null);

  const dateChange = (newDate) => {
    let formatDate = dayjs(newDate).format('YYYY-MM-DD');
    setDate(formatDate);
    setTodoData({ ...todoData, endDate: formatDate });
  };

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

  //할일 추가 모달창 닫았을때  모든 텍스트필드값 초기화
  const clear = () => {
    setTodoData({ id: '', title: '', content: '', endDate: '' });
    setDate(null);
  };

  return (
    <Paper className={classes.paper}>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Grid container>
          <Grid item lg={10}>
            <Typography variant="h5">
              {todoId ? '할 일 수정' : '할 일 추가'}
            </Typography>
          </Grid>
          <Grid item lg={2} style={{ textAlign: 'end' }}>
            <IconButton
              style={{ padding: 0, color: '#d63031' }}
              onClick={handleClose}
            >
              <CancelOutlined />
            </IconButton>
          </Grid>
        </Grid>
        <TextField
          name="title"
          variant="standard"
          label="제목"
          fullWidth
          value={todoData.title}
          onChange={(e) => setTodoData({ ...todoData, title: e.target.value })}
        ></TextField>
        <TextField
          name="content"
          variant="standard"
          label="내용"
          fullWidth
          value={todoData.content}
          onChange={(e) =>
            setTodoData({ ...todoData, content: e.target.value })
          }
        ></TextField>
        <LocalizationProvider dateAdapter={DateAdapter} locale={ko}>
          <DatePicker
            label="종료일을 지정해주세요"
            name="endDate"
            mask="____-__-__"
            value={date}
            inputFormat="YYYY-MM-DD"
            onChange={(newDate) => {
              dateChange(newDate);
            }}
            renderInput={(params) => (
              <TextField {...params} style={{ marginTop: 35 }} />
            )}
          />
        </LocalizationProvider>
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            color="success"
            type="submit"
            fullWidth
            style={{ marginTop: 20, color: 'white' }}
          >
            {todoId ? '할 일 수정' : '할 일 추가'}
          </Button>
        </ThemeProvider>
      </form>
    </Paper>
  );
};

export default Form;
