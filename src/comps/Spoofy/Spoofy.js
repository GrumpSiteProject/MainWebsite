// Music gallery page

import { Component } from "react";
import PropTypes from "prop-types";

// Material UI components
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

// Material UI stlying
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../../assets/styles/SpoofyStyles";

// Icons
import MenuIcon from "@material-ui/icons/MenuRounded";
import CloseIcon from "@material-ui/icons/CloseRounded";

// Page components
import Navbar from "../../staticComps/Navbar";
import Menu from "./Menu";
import Home from "./Home";
import Browse from "./Browse";
import Radio from "./Radio";
import Playbar from "./Playbar";

// Logo images
import logo from "../../assets/images/spoofy/logo.svg";
import logoSm from "../../assets/images/spoofy/logoSm.svg";

// Artist images
import starbomb from "../../assets/images/spoofy/artistCovers/Starbomb.png";

// Main Component
class Spoofy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top: false,
      bottom: false,
      drawerOpen: false,
    };
  }

  // Checks if the app has been scrolled to the bottom
  checkTop = () => {
    const el = document.getElementById("app");
    const footer = document.getElementById("footer");

    if (el.scrollTop === 0) {
      if (!this.state.top) this.setState({ top: true });
    } else {
      if (this.state.top) this.setState({ top: false });
    }
  };

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

  toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    this.setState({ drawerOpen: open });
  };

  componentDidMount() {
    console.log(
      `
    "Can people hear it on, eh... Spoofy?"
    — Avi Avidan
    `
    );

    this.checkTop();
    this.checkBottom();

    document.getElementById("app").addEventListener("scroll", this.checkTop);
    document.getElementById("app").addEventListener("scroll", this.checkBottom);
  }

  componentWillUnmount() {
    document.getElementById("app").removeEventListener("scroll", this.checkTop);
    document
      .getElementById("app")
      .removeEventListener("scroll", this.checkBottom);
  }

  render() {
    const { classes } = this.props;
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

    return (
      <div className={classes.root}>
        <Grid container direction="row" className={classes.wrapper}>
          <Grid item xs className={classes.main}>
            <Hidden mdDown>
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
            </Hidden>

            <Hidden lgUp>
              <Container maxWidth="xl" className={classes.topBarSmWrapper}>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  className={`${classes.topBarSm} ${
                    this.state.top ? "" : classes.scrolled
                  }`}
                >
                  <Grid item xs className={classes.logoWrapper}>
                    <img alt="spoofy" src={logoSm} className={classes.logo} />
                  </Grid>

                  <Grid item>
                    <IconButton
                      color="primary"
                      variant="contained"
                      onClick={() =>
                        this.setState({ drawerOpen: !this.state.drawerOpen })
                      }
                    >
                      <MenuIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </Container>
            </Hidden>

            <Grid container direction="row">
              <Box display={{ xs: "none", lg: "block" }}>
                <Grid item className={classes.sidebar}>
                  <div className={classes.stickyMenu}>
                    <Menu />
                  </div>
                </Grid>
              </Box>

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

          <Box display={{ xs: "none", lg: "block" }}>
            <Grid item className={classes.friendBar}>
              <div className={classes.friendActivity}>
                <h3>Friend Activity</h3>
              </div>
            </Grid>
          </Box>

          <Playbar albumSrc={starbomb} />
        </Grid>

        <SwipeableDrawer
          anchor="right"
          open={this.state.drawerOpen}
          onClose={this.toggleDrawer(false)}
          onOpen={this.toggleDrawer(true)}
          disableBackdropTransition={!iOS}
          disableDiscovery={iOS}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <Grid item className={classes.drawer}>
            <Grid
              container
              direction="column"
              spacing={1}
              style={{ width: "100%" }}
            >
              <Grid
                item
                container
                direction="row"
                alignItems="center"
                justify="flex-end"
              >
                <Grid item>
                  <IconButton
                    color="primary"
                    variant="contained"
                    onClick={() =>
                      this.setState({ drawerOpen: !this.state.drawerOpen })
                    }
                  >
                    <CloseIcon fontSize="large" />
                  </IconButton>
                </Grid>
              </Grid>

              <Grid item>
                <Menu />
              </Grid>
            </Grid>
          </Grid>
        </SwipeableDrawer>
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
