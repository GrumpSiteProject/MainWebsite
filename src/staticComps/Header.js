import { makeStyles } from "@material-ui/core/styles";
import arin from "../assets/putInDatabaseLater/pics/arin.png";
import dan from "../assets/putInDatabaseLater/pics/dan.png";
import ninjaBrian from "../assets/putInDatabaseLater/pics/ninjaBrian.png";
import suzy from "../assets/putInDatabaseLater/pics/suzy.png";
import ross from "../assets/putInDatabaseLater/pics/ross.png";

const useStyles = makeStyles((theme) => ({
  header: {
    height: "20vh",
    width: "100%",
    textAlignLast: "center",
  },
}));
function Header() {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <img src={arin} height="195" width="155" alt="arin"></img>
      <img src={dan} height="195" width="155" alt="dan"></img>
      <img src={ninjaBrian} height="195" width="155" alt="ninjaBrian"></img>
      <img src={suzy} height="195" width="155" alt="suzy"></img>
      <img src={ross} height="195" width="155" alt="ross"></img>
    </div>
  );
}
export default Header;
