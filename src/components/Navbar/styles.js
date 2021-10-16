import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '250px',
    minHeight: 0,
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '250px',
  },
  button: {
    justifyContent: 'flex-end',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));
