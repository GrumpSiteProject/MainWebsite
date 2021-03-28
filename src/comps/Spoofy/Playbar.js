// Spoofy playbar component

// Material UI components
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

// Material UI stlying
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "sticky",
    zIndex: 1000,

    bottom: "0",
    left: "0",

    width: "100%",
    padding: "1rem",
  },

  playbar: {
    maxWidth: "100%",

    padding: "1rem",
    margin: "0",

    background: "#282828",

    borderRadius: "0.5rem",
  },

  coverWrapper: {
    width: "5rem",
    marginRight: theme.spacing(2),
  },

  albumCover: {
    width: "100%",
    height: "0",

    paddingTop: "100%",

    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",

    borderRadius: "0.5rem",
  },

  track: {
    color: "#fff",
  },

  album: {
    color: "#595959",
  },
}));

export default function Playbar(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box className={classes.playbar} boxShadow={3}>
        <Grid container direction="row">
          <Grid item>
            <Grid container direction="row" alignItems="center">
              <Grid item className={classes.coverWrapper}>
                <Box
                  boxShadow={3}
                  className={classes.albumCover}
                  style={{ backgroundImage: "url(" + props.albumSrc + ")" }}
                ></Box>
              </Grid>

              <Grid item>
                <Grid container direction="column">
                  <Grid item xs>
                    <Typography variant="subtitle1" className={classes.track}>
                      Track
                    </Typography>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="body1" className={classes.album}>
                      Album
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs></Grid>
          <Grid item></Grid>
        </Grid>
      </Box>
    </div>
  );
}
