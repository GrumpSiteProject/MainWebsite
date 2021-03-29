// TEMPORARY navbar component
import { makeStyles } from "@material-ui/core/styles";

import { Link } from "react-router-dom";
import {useState} from "react"

import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import IconButton from '@material-ui/core/IconButton';
import Home from "../assets/putInDatabaseLater/pics/navbarButtons/Home-01.png"
import HomeHover from "../assets/putInDatabaseLater/pics/navbarButtons/Home_Hover-01.png"

const useStyles = makeStyles((theme) => ({
  root: {
    postion: "relative",
    zIndex: 1000,
    paddingTop: theme.spacing(3),
    display: "flex",
    justifyContent: "center",
  },
  imgButton: {
    height:50,
    width:100
  }
}));

function Navbar() {
  const classes = useStyles();
const [img, setImg] = useState(Home)
function onHoverHome() {
  setImg(HomeHover)
}
function test() {
  console.log("test")
}
  return (
    <Container className={classes.root} maxWidth="lg">
      <ButtonGroup variant="contained" color="primary" aria-label="navbar">
        <IconButton onMouseOver={() =>onHoverHome()} component={Link} to="/">
        <img src={img}  onMouseLeave={() => test} className={classes.imgButton}>
        </img>
        </IconButton>

        <Button component={Link} to="/theatre">
          Theater
        </Button>

        <Button>Spoofy</Button>

        <Button>local clown snatches in your area</Button>
      </ButtonGroup>
    </Container>
  );
}

export default Navbar;

// Wizrad (Max) 26.03.21 😎
