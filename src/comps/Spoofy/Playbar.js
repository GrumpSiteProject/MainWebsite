// Spoofy playbar component

// Material UI components
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import IconButton from "@material-ui/core/IconButton";

// Icons
import PlayCircleIcon from "@material-ui/icons/PlayCircleFilledRounded";
import PrevIcon from "@material-ui/icons/SkipPreviousRounded";
import NextIcon from "@material-ui/icons/SkipNextRounded";
import VolumeIcon from "@material-ui/icons/VolumeUpRounded";

// Material UI stlying
import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "sticky",
    zIndex: 1000,

    bottom: "0",
    left: "0",

    width: "100%",
    padding: "1rem",

    "@media screen and (max-width: 600px)": {
      padding: 0,
    },
  },

  playbar: {
    maxWidth: "100%",

    padding: "1rem",
    margin: "0",

    background: "#282828",

    borderRadius: "0.5rem",

    "@media screen and (max-width: 600px)": {
      borderRadius: 0,
    },
  },

  coverWrapper: {
    width: "5rem",
    marginRight: theme.spacing(2),
    "@media screen and (max-width: 600px)": {
      width: "3rem",
    },
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

  progressBar: {
    maxWidth: "1000px",
  },

  volumeBar: {
    minWidth: "80px",
  },
}));

const CustomLinearProgress = withStyles((theme) => ({
  root: {
    height: 6,
    borderRadius: 6,
  },
  colorPrimary: {
    backgroundColor: "#595959",
  },
  bar: {
    borderRadius: 6,
    backgroundColor: "#F86D09",
  },
}))(LinearProgress);

export default function Playbar(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box className={classes.playbar} boxShadow={3}>
        <Grid container direction="row" spacing={2}>
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

          <Grid item xs>
            <Box display={{ xs: "none", md: "block" }}>
              <Grid item container direction="column" align="center">
                <Grid item>
                  <div style={{ width: "fit-content" }}>
                    <Grid container direction="row">
                      <Grid item>
                        <IconButton color="primary" variant="contained">
                          <PrevIcon fontSize="large" />
                        </IconButton>
                      </Grid>

                      <Grid item>
                        <IconButton color="primary" variant="contained">
                          <PlayCircleIcon fontSize="large" />
                        </IconButton>
                      </Grid>

                      <Grid item>
                        <IconButton color="primary" variant="contained">
                          <NextIcon fontSize="large" />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>

                <Grid item xs>
                  <CustomLinearProgress
                    variant="determinate"
                    // value={props.progress}
                    value={25}
                    className={classes.progressBar}
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>

          <Grid item xl="1">
            <Box
              display={{ xs: "none", md: "block" }}
              style={{ height: "100%" }}
            >
              <Grid
                container="row"
                alignItems="center"
                style={{ height: "100%" }}
              >
                <Grid item>
                  <IconButton color="primary" variant="contained">
                    <VolumeIcon />
                  </IconButton>
                </Grid>

                <Grid item xs>
                  <CustomLinearProgress
                    variant="determinate"
                    // value={props.volume}
                    value={25}
                    className={classes.volumeBar}
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>

          <Grid item>
            <Box
              display={{ xs: "block", md: "none" }}
              style={{ height: "100%" }}
            >
              <Grid
                item
                container
                direction="row"
                justify="flex-end"
                alignItems="center"
                style={{ height: "100%" }}
                xs
              >
                <Grid item>
                  <IconButton color="primary" variant="contained" size="small">
                    <PlayCircleIcon fontSize="large" />
                  </IconButton>
                </Grid>

                <Grid item>
                  <IconButton color="primary" variant="contained" size="small">
                    <NextIcon fontSize="large" />
                  </IconButton>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
