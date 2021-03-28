// TEMPORARY navbar component
import { makeStyles } from "@material-ui/core/styles";

import { Link } from "react-router-dom";

import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const useStyles = makeStyles((theme) => ({
  root: {
    postion: "relative",
    zIndex: 1000,
    paddingTop: theme.spacing(3),
    display: "flex",
    justifyContent: "center",
  },
}));

function Navbar(props) {
  const classes = useStyles();

  if (!props.inline) {
    return (
      <Container className={classes.root} maxWidth="lg">
        <ButtonGroup
          variant={props.variant || "contained"}
          color={props.color || "primary"}
          aria-label="navbar"
        >
          <Button component={Link} to="/">
            Home
          </Button>

          <Button component={Link} to="/theatre">
            Theater
          </Button>

          <Button component={Link} to="/spoofy">
            Spoofy
          </Button>

          <Button>local clown snatches in your area</Button>
        </ButtonGroup>
      </Container>
    );
  } else {
    return (
      <ButtonGroup
        variant={props.variant || "contained"}
        color={props.color || "primary"}
        aria-label="navbar"
      >
        <Button component={Link} to="/">
          Home
        </Button>

        <Button component={Link} to="/theatre">
          Theater
        </Button>

        <Button component={Link} to="/spoofy">
          Spoofy
        </Button>

        <Button>local clown snatches in your area</Button>
      </ButtonGroup>
    );
  }
}

export default Navbar;

// Wizrad (Max) 26.03.21 😎
