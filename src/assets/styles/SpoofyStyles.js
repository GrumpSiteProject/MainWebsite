export const styles = (theme) => ({
  root: {
    background: "#000",
    display: "table-cell",
    width: "100%",
    minHeight: "100%",
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

  main: {},

  sidebar: {
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },

  menuContent: {
    maxWidth: "100%",
  },

  content: {
    width: "100%",
  },

  contentWrapper: {
    position: "relative",
  },

  friendBar: {
    background: "#111111",
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
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
    height: "30vh",
    marginTop: "-30vh",
    pointerEvents: "none",
    background: "rgb(0,0,0)",
    background:
      "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%)",

    transition: "opacity 0.25s ease",
  },

  hide: {
    opacity: "0",
  },

  // fade: {
  //   position: "sticky",
  //   width: "100%",
  //   height: 0,
  // },
});
