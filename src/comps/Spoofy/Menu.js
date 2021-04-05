// Spoofy menu component

// Material UI components
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// Material UI stlying
import { makeStyles } from "@material-ui/core/styles";

// Icons
import HomeIcon from "@material-ui/icons/HomeRounded";
import AlbumIcon from "@material-ui/icons/AlbumRounded";
import RadioIcon from "@material-ui/icons/RadioRounded";

// Page components
import MenuItem from "./MenuItem";

const useStyles = makeStyles((theme) => ({
  menuContent: {},
}));

function Menu(props) {
  const classes = useStyles();
  return (
    <Grid container direction="column" spacing={1}>
      <Grid item>
        <MenuItem
          clickEvent={(e) => props.scrollEvent(e, props.refs[0])}
          active={props.currentSection === "home"}
        >
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
        <MenuItem
          clickEvent={(e) => props.scrollEvent(e, props.refs[1])}
          active={props.currentSection === "browse"}
        >
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
        <MenuItem
          clickEvent={(e) => props.scrollEvent(e, props.refs[2])}
          active={props.currentSection === "radio"}
        >
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

      <Grid item>
        <MenuItem
          clickEvent={(e) => props.scrollEvent(e, props.refs[0])}
          active={props.currentSection === "avi"}
        >
          <h3>Avi Stories</h3>
        </MenuItem>
      </Grid>
    </Grid>
  );
}

export default Menu;
