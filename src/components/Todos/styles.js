import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
    padding: theme.spacing(2),
  },
  typography: {
    textAlign: "left",
  },
}));
