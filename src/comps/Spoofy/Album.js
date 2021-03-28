// Spoofy album component

// Material UI components
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

// Material UI stlying
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    textDecoration: "none",
  },

  coverWrapper: {
    width: "100%",
    height: "0",

    paddingBottom: "100%",
    marginBottom: theme.spacing(2),

    position: "relative",
  },

  albumCover: {
    position: "absolute",

    top: "0",
    left: "0",

    width: "100%",
    height: "100%",

    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",

    borderRadius: "2rem",

    transition: "transform 0.25s ease, box-shadow 0.25s ease",

    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0 0 3rem -0.5rem rgba(250, 196, 157, 0.2)",
    },
  },

  name: {
    color: "#fff",
    fontWeight: "bold",
  },

  artist: {
    color: "#595959",
  },
}));

export default function Album(props) {
  const classes = useStyles();

  return (
    <a
      href={props.link}
      target={props.link ? "_blank" : ""}
      rel="noreferrer"
      className={classes.root}
    >
      <Grid container direction="column">
        <Grid item xs className={classes.coverWrapper}>
          <Box
            className={classes.albumCover}
            style={{ backgroundImage: "url(" + props.src + ")" }}
          ></Box>
        </Grid>

        <Grid item xs>
          <Typography variant="subtitle1" className={classes.name}>
            {props.name}
          </Typography>

          <Typography variant="body1" className={classes.artist}>
            {props.artist}
          </Typography>
        </Grid>
      </Grid>
    </a>
  );
}
