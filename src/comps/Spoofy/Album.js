// Spoofy album component

import { Component } from "react";
import PropTypes from "prop-types";

// Material UI components
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

// Material UI stlying
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
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

  cover: {
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

  artist: {
    color: "#595959",
  },
});

class Album extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name,
      artist: props.artist,
      link: props.link,
      src: "",
      loadSrc: props.src,
      maxLoadAttempts: props.loadAttempts || 5,
    };
  }

  componentDidMount() {
    let attempts = 0;

    let imageLoader = new Image();
    imageLoader.src = this.state.loadSrc;

    imageLoader.onload = () => {
      this.setState({ src: this.state.loadSrc });
    };

    imageLoader.onerror = () => {
      if (attempts >= this.state.maxLoadAttempts) return;

      console.log("error loading image trying again");
      let imageLoader = new Image();
      imageLoader.src = this.state.loadSrc;

      attempts++;
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <a
        href={this.state.link}
        target={this.state.link ? "_blank" : ""}
        rel="noreferrer"
        className={classes.root}
      >
        <Grid container direction="column">
          <Grid item xs className={classes.coverWrapper}>
            <Box
              className={classes.cover}
              style={{ backgroundImage: "url(" + this.state.src + ")" }}
            ></Box>
          </Grid>

          <Grid item xs>
            <Typography variant="subtitle1" className={classes.name}>
              {this.state.name}
            </Typography>

            <Typography variant="body1" className={classes.artist}>
              {this.state.artist}
            </Typography>
          </Grid>
        </Grid>
      </a>
    );
  }
}

Album.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string,
  artist: PropTypes.string,
  link: PropTypes.string,
  src: PropTypes.string,
  loadAttempts: PropTypes.number,
};

export default withStyles(styles)(Album);
