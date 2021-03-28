// Spoofy artist component

// Material UI components
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

// Material UI stlying
import { makeStyles } from "@material-ui/core/styles";

// Text truncation components
import LinesEllipsis from "react-lines-ellipsis";
import responsiveHOC from "react-lines-ellipsis/lib/responsiveHOC";
const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);

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

  artistCover: {
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
      boxShadow: "0 0 3rem -0.5rem rgba(214, 254, 255, 0.2)",
    },
  },

  name: {
    color: "#fff",
    fontWeight: "bold",
  },

  description: {
    color: "#595959",
  },
}));

export default function Artist(props) {
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
            className={classes.artistCover}
            style={{ backgroundImage: "url(" + props.src + ")" }}
          ></Box>
        </Grid>

        <Grid item xs>
          <Typography variant="subtitle1" className={classes.name}>
            {props.name}
          </Typography>

          <ResponsiveEllipsis
            text={props.children}
            maxLine="3"
            ellipsis="..."
            trimRight
            basedOn="letters"
            className={classes.description}
          />
        </Grid>
      </Grid>
    </a>
  );
}
