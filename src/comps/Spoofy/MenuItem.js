// Spoofy menu item component

// Material UI stlying
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& h1, h2, h3, h4, h5, h6, p": {
      margin: "0px",
    },

    display: "inline-block",

    width: "100%",
    padding: "0.5rem",

    borderRadius: "0.5rem",

    textDecoration: "none",
    transition: "background 0.25s ease, color 0.25s ease",
  },

  active: {
    fontWeight: "bold",
    color: "#fff",
    background: "#282828",
  },

  inactive: {
    fontWeight: "400",
    color: "#595959",
    background: "rgba(0, 0, 0, 0)",
  },
}));

export default function MenuItem(props) {
  const classes = useStyles();

  return (
    <a
      href="#"
      className={`${props.active ? classes.active : classes.inactive} ${
        classes.root
      }`}
    >
      {props.children}
    </a>
  );
}
