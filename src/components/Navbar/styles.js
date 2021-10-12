import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  toolbar: {
    display: "flex",
  },
  button: {
    justifyContent: "flex-end",
  },
}));
