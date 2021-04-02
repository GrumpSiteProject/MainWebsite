export const styles = (theme) => ({
  root: {
    background: "#000",
    display: "table-cell",
    minHeight: "100%",
    maxWidth: "100%",
    color: "#fff",
  },

  wrapper: {
    minHeight: "100%",
  },

  topBar: {
    height: "6rem",
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(4),
  },

  topBarSmWrapper: {
    position: "sticky",
    top: 0,
    left: 0,
    zIndex: 1000,
    background: "#000",
  },

  topBarSm: {
    height: "6rem",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    transition: "all 0.5s ease",
    "-webkit-transition": "all .3s ease-in-out",
    "-moz-transition": "all .3s ease-in-out",
    "-o-transition": "all .3s ease-in-out",
    "-ms-transition": "all .3s ease-in-out",
  },

  scrolled: {
    height: "4.5rem !important",
    paddingTop: theme.spacing(1) + "px !important",
    paddingBottom: theme.spacing(1) + "px !important",

    boxShadow:
      "rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px",
  },

  logoWrapper: {
    height: "100%",
  },

  logo: {
    height: "100%",
  },

  navbarWrapper: {
    position: "relative",
    display: "flex",
    justifyContent: "end",
  },

  drawer: {
    background: "#111111",

    height: "100%",
    width: "100%",

    padding: theme.spacing(2),

    color: "#fff",
    position: "relative",
    overflowX: "hidden",
  },

  main: {},

  sidebar: {
    height: "100%",
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },

  sidebarLogoWrapper: {},

  sidebarLogo: {
    width: "100%",
  },

  stickyMenu: {
    paddingTop: theme.spacing(2),
    position: "sticky",
    top: 0,
    left: 0,
  },

  content: {
    width: "100%",
  },

  contentWrapper: {
    position: "relative",
  },

  friendBarWrapper: {
    height: "100%",
    display: "block",
  },

  friendBar: {
    background: "#111111",
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    height: "calc(100% + 9rem)",
    marginBottom: "-9rem",
  },

  friendActivity: {
    paddingTop: theme.spacing(2),
    position: "sticky",
    top: 0,
    left: 0,
  },

  title: {
    fontWeight: "bold",
    color: "#fff",
    marginBottom: theme.spacing(2),
  },

  subtitle: {
    fontWeight: "bold",
    color: "#595959",
    marginBottom: theme.spacing(2),
  },

  fade: {
    position: "sticky",
    display: "block",
    bottom: "0",
    left: "0",
    width: "100%",
    height: "40vh",
    marginTop: "-40vh",
    pointerEvents: "none",
    background: "rgb(0,0,0)",
    background:
      "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%)",

    transition: "opacity 0.25s ease",
    webkitTransition: "opacity 250ms",

    // "@media screen and (max-height)"
  },

  hide: {
    opacity: "0",
  },
});
