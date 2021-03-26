export const styles = (theme) => ({
  root: {
    marginBottom: theme.spacing(1),
    maxWidth: "100vw",
  },

  nav: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },

  messageWrapper: {
    paddingTop: theme.spacing(4),
  },

  clamped: {
    paddingBottom: "0px !important",
  },

  messageRight: {
    position: "relative",
    overflow: "unset",
    "&::before": {
      content: '""',
      width: "0px",
      height: "0px",
      position: "absolute",
      borderLeft: "10px solid transparent",
      borderRight: "10px solid #fff",
      borderTop: "10px solid transparent",
      borderBottom: "10px solid #fff",
      right: theme.spacing(8),
      top: "-19px",
    },
  },

  messageLeft: {
    position: "relative",
    overflow: "unset",
    "&::before": {
      content: '""',
      width: "0px",
      height: "0px",
      position: "absolute",
      borderLeft: "10px solid #fff",
      borderRight: "10px solid transparent",
      borderTop: "10px solid transparent",
      borderBottom: "10px solid #fff",
      left: theme.spacing(8),
      top: "-19px",
    },
  },

  avatar: {
    marginBottom: theme.spacing(1),
  },
});
