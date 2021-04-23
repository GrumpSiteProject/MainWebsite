// Music gallery page

import { Component, createRef } from "react";
import PropTypes from "prop-types";

// Material UI components
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";

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

    const homeRef = createRef();
    const browseRef = createRef();
    const radioRef = createRef();

    this.state = {
      top: false,
      bottom: false,
      drawerOpen: false,

      visibleSection: "home",

      homeRef: homeRef,
      browseRef: browseRef,
      radioRef: radioRef,

      sections: [
        { section: "home", ref: homeRef },
        { section: "browse", ref: browseRef },
        { section: "radio", ref: radioRef },
      ],

      windowWidth: window.innerWidth,
    };
  }

  scrollTo(e, ref) {
    if (e && ref && ref.current) {
      e.preventDefault();
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  handleScroll() {
    this.checkTop();
    this.checkBottom();
    this.checkSection();
  }

  handleResize() {
    this.setState({ windowWidth: window.innerWidth });
  }

  getDimensions(el) {
    const { height } = el.getBoundingClientRect();
    const offsetTop = el.offsetTop;
    const offsetBottom = offsetTop + height;

    return {
      height,
      offsetTop,
      offsetBottom,
    };
  }

  checkSection() {
    const scrollPosition = document.getElementById("app").scrollTop;

    const currentSection = this.state.sections.find((section) => {
      const ele = section.ref.current;
      if (ele) {
        const { offsetBottom, offsetTop } = this.getDimensions(ele);
        return scrollPosition > offsetTop && scrollPosition < offsetBottom;
      }
    });

    if (
      currentSection &&
      currentSection.section !== this.state.visibleSection
    ) {
      this.setState({ visibleSection: currentSection.section });
    } else if (!currentSection && this.state.visibleSection) {
      this.setState({ visibleSection: "home" });
    }
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

  toggleDrawer(e, open) {
    if (e && e.type === "keydown" && (e.key === "Tab" || e.key === "Shift")) {
      return;
    }

    this.setState({ drawerOpen: open });
  }

  componentDidMount() {
    console.log(
      `
    "Can people hear it on, eh... Spoofy?"
    — Avi Avidan
    `
    );

    this.handleScroll();

    document
      .getElementById("app")
      .addEventListener("scroll", () => this.handleScroll());
    window.addEventListener("resize", () => this.handleResize());
  }

  componentWillUnmount() {
    document
      .getElementById("app")
      .removeEventListener("scroll", () => this.handleScroll());
    window.addEventListener("resize", () => this.handleResize());
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
                    <img
                      alt="spoofy"
                      src={logoSm}
                      className={classes.logo}
                      onClick={(e) => this.scrollTo(e, this.state.homeRef)}
                    />
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
                    <Menu
                      refs={[
                        this.state.homeRef,
                        this.state.browseRef,
                        this.state.radioRef,
                      ]}
                      scrollEvent={(e, ref) => this.scrollTo(e, ref)}
                      currentSection={this.state.visibleSection}
                    />
                  </div>
                </Grid>
              </Box>

              <Grid item xs className={classes.content}>
                <Container maxWidth="lg" className={classes.contentWrapper}>
                  <Grid container direction="column" spacing={8}>
                    <Grid item xs ref={this.state.homeRef}>
                      <Home classes={classes} />
                    </Grid>

                    <Grid item xs ref={this.state.browseRef}>
                      <Browse classes={classes} />
                    </Grid>

                    <Grid item xs ref={this.state.radioRef}>
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

        {this.state.windowWidth < 1280 && (
          <SwipeableDrawer
            anchor="right"
            open={this.state.drawerOpen}
            onClose={(e) => this.toggleDrawer(e, false)}
            onOpen={(e) => this.toggleDrawer(e, true)}
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
                  <Menu
                    refs={[
                      this.state.homeRef,
                      this.state.browseRef,
                      this.state.radioRef,
                    ]}
                    scrollEvent={(e, ref) => this.scrollTo(e, ref)}
                    currentSection={this.state.visibleSection}
                  />
                </Grid>
              </Grid>
            </Grid>
          </SwipeableDrawer>
        )}
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
