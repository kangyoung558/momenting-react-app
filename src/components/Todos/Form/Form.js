import React from 'react';
import { ko } from 'dayjs/locale/ko';
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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DateAdapter from '@mui/lab/AdapterDayjs';
import { DatePicker, LocalizationProvider } from '@mui/lab';
import useStyles from './styles';
import dayjs from 'dayjs';

const theme = createTheme({
  palette: {
    success: {
      main: '#20c997',
    },
  },
});

const Form = ({
  open,
  handleClose,
  handleSubmit,
  todoData,
  setTodoData,
  date,
  setDate,
}) => {
  const classes = useStyles();
  const handleChange = (newDate) => {
    let formatDate = dayjs(newDate).format('YYYY-MM-DD');
    setDate(formatDate);
    setTodoData({ ...todoData, endDate: formatDate });
  };

  return (
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
              <Typography variant="h5">할 일 추가</Typography>
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
          <LocalizationProvider dateAdapter={DateAdapter} locale={ko}>
            <DatePicker
              label="종료일을 지정해주세요"
              name="endDate"
              mask="____-__-__"
              value={date}
              inputFormat="YYYY-MM-DD"
              onChange={(newDate) => {
                handleChange(newDate);
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
              style={{ marginTop: 20 }}
            >
              할 일 추가하기
            </Button>
          </ThemeProvider>
        </form>
      </Paper>
    </Modal>
  );
};

export default Form;
