import { makeStyles } from '@material-ui/core';

export default makeStyles({
  button: {
    visibility: 'hidden',
    textAlign: 'center',

    // "&:hover": {
    //   visibility: "visible",
    // },
  },
  listItem: {
    '&:hover > #button': {
      visibility: 'visible',
    },
  },
  checked: {
    color: (todo) => (todo.done === true ? '#c4c4c4' : ''),
  },
  editButton: {
    padding: 0,
    color: '#20c997',
  },
});
