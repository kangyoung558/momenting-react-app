import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    alignItems: "center",
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: "center",
  },
  padding: {
    padding: theme.spacing(5, 5, 5, 5),
  },
  margin: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },
  backgroung: {
    backgroundColor: "#f0f2f5",
  },
}));
