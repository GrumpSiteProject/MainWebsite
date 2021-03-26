// TEMPORARY 404 page
import Container from "@material-ui/core/Container";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
  },
}));

function PageNotFound() {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="lg">
      <h1>4040 Page Not Found</h1>
    </Container>
  );
}

export default PageNotFound;
