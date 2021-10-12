import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    padding: 20,
    "& .MuiTextField-root": {
      marginTop: theme.spacing(2),
    },
  },
  addButton: {
    // backgroundColor: "#20c997",
    // color: "white",
    marginTop: theme.spacing(2),
  },
}));
