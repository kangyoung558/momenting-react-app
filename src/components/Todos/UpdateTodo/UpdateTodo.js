import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import 'moment/locale/ko';
import {
  Modal,
  Paper,
  Typography,
  TextField,
  Button,
  IconButton,
  Grid,
} from '@mui/material';
import { CancelOutlined } from '@mui/icons-material';
import { EditOutlined } from '@material-ui/icons';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DateAdapter from '@mui/lab/AdapterMoment';
import { DesktopDatePicker, LocalizationProvider } from '@mui/lab';
import useStyles from './styles';
import { createTodo, updateTodo } from '../../../actions/todos';
const theme = createTheme({
  palette: {
    success: {
      main: '#20c997',
    },
  },
});

const UpdateTodo = ({ todoId, setTodoId }) => {
  const classes = useStyles();
  const [todoData, setTodoData] = useState({
    id: '',
    title: '',
    content: '',
    endDate: '',
  });
  const todo = useSelector((state) =>
    todoId ? state.todos.find((p) => p.id === todoId) : null
  );
  //모먼트 날짜 상태 관리
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));

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
  const handleOpen = () => {
    setTodoId(todo.id);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    clear();
  };

  //할일 추가 모달창 닫았을때  모든 텍스트필드값 초기화
  const clear = () => {
    setTodoData({ id: '', title: '', content: '', endDate: '' });
    setDate(moment().format('YYYY-MM-DD'));
  };

  return (
    <div>
      <IconButton style={{ color: '#20c997' }} onClick={handleOpen}>
        <EditOutlined />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper className={classes.paper}>
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <Grid container>
              <Grid item lg={10}>
                <Typography variant="h5">할 일 수정</Typography>
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
              onChange={(e) =>
                setTodoData({ ...todoData, title: e.target.value })
              }
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
            <LocalizationProvider dateAdapter={DateAdapter}>
              <DesktopDatePicker
                label="종료일을 지정해주세요"
                name="endDate"
                inputFormat="YYYY-MM-DD"
                value={todoData.endDate === '' ? date : todoData.endDate}
                onChange={(newDate) =>
                  setTodoData({ ...todoData, endDate: newDate })
                }
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
                style={{ marginTop: 20 }}
              >
                할 일 수정하기
              </Button>
            </ThemeProvider>
          </form>
        </Paper>
      </Modal>
    </div>
  );
};

export default UpdateTodo;
