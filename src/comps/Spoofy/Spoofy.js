// Music gallery page

import { Component } from "react";
import PropTypes from "prop-types";

// Material UI components
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

// Material UI stlying
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../../assets/styles/SpoofyStyles";

// Icons
import HomeIcon from "@material-ui/icons/HomeRounded";
import AlbumIcon from "@material-ui/icons/AlbumRounded";
import RadioIcon from "@material-ui/icons/RadioRounded";

// Page components
import Navbar from "../../staticComps/Navbar";
import MenuItem from "./MenuItem";
import Home from "./Home";
import Browse from "./Browse";
import Radio from "./Radio";
import Playbar from "./Playbar";

// Logo image
import logo from "../../assets/images/spoofy/logo.svg";

// Artist images
import starbomb from "../../assets/images/spoofy/artistCovers/Starbomb.png";

// Main Component
class Spoofy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bottom: false,
    };
  }

  // Checks if the app has been scrolled to the bottom
  checkBottom = () => {
    const el = document.getElementById("app");
    const footer = document.getElementById("footer");

    if (
      el.scrollTop >=
      el.scrollHeight - el.offsetHeight - footer.clientHeight
    ) {
      if (!this.state.bottom) this.setState({ bottom: true });
    } else {
      if (this.state.bottom) this.setState({ bottom: false });
    }
  };

  componentDidMount() {
    console.log(
      `
    "Can people hear it on, eh... Spoofy?"
    — Avi Avidan
    `
    );

    document.getElementById("app").addEventListener("scroll", this.checkBottom);
  }

  componentWillUnmount() {
    document
      .getElementById("app")
      .removeEventListener("scroll", this.checkBottom);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container direction="row" className={classes.wrapper}>
          <Grid item xs className={classes.main}>
            <Grid
              container
              direction="row"
              alignItems="center"
              className={classes.topBar}
            >
              <Grid item className={classes.logoWrapper}>
                <img alt="spoofy" src={logo} className={classes.logo} />
              </Grid>

              <Grid item container xs justify="flex-end">
                <Navbar variant="outlined" inline={true} />
              </Grid>
            </Grid>

            <Grid container direction="row">
              <Grid item className={classes.sidebar}>
                <Grid
                  container
                  direction="column"
                  spacing={1}
                  style={{ width: "100%" }}
                >
                  <Grid item>
                    <MenuItem active={true}>
                      <Grid
                        container
                        spacing={2}
                        alignItems="center"
                        className={classes.menuContent}
                      >
                        <Grid item>
                          <HomeIcon />
                        </Grid>
                        <Grid item>
                          <h3>Home</h3>
                        </Grid>
                      </Grid>
                    </MenuItem>
                  </Grid>

                  <Grid item>
                    <MenuItem active={false}>
                      <Grid
                        container
                        spacing={2}
                        alignItems="center"
                        className={classes.menuContent}
                      >
                        <Grid item>
                          <AlbumIcon />
                        </Grid>
                        <Grid item>
                          <h3>Browse</h3>
                        </Grid>
                      </Grid>
                    </MenuItem>
                  </Grid>

                  <Grid item>
                    <MenuItem active={false}>
                      <Grid
                        container
                        spacing={2}
                        alignItems="center"
                        className={classes.menuContent}
                      >
                        <Grid item>
                          <RadioIcon />
                        </Grid>
                        <Grid item>
                          <h3>Radio</h3>
                        </Grid>
                      </Grid>
                    </MenuItem>
                  </Grid>

                  <Grid item>
                    <Typography
                      variant="h5"
                      noWrap={true}
                      style={{
                        marginBottom: "1rem",
                        marginTop: "1rem",
                        fontWeight: "bold",
                      }}
                    >
                      YOUR LIBRARY
                    </Typography>
                  </Grid>

                  <MenuItem active={false}>
                    <h3>Avi Stories</h3>
                  </MenuItem>
                </Grid>
              </Grid>

              <Grid item xs className={classes.content}>
                <Container maxWidth="lg" className={classes.contentWrapper}>
                  <Grid container direction="column" spacing={8}>
                    <Grid item xs>
                      <Home classes={classes} />
                    </Grid>

                    <Grid item xs>
                      <Browse classes={classes} />
                    </Grid>

                    <Grid item xs>
                      <Radio classes={classes} />
                    </Grid>
                  </Grid>
                </Container>
              </Grid>

              <div
                className={`${classes.fade} ${
                  this.state.bottom ? classes.hide : ""
                }`}
              ></div>
            </Grid>
          </Grid>

          <Grid item className={classes.friendBar}>
            <h3>Friend Activity</h3>
          </Grid>

          <Playbar albumSrc={starbomb} />
        </Grid>
      </div>
    );
  }
}

// Inject Material UI Style classes
Spoofy.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Spoofy);

// Wizrad (Max) 26.03.21 😎
