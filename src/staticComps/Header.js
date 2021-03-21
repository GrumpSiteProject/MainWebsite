import { makeStyles } from '@material-ui/core/styles';
import arin from "../putInDatabaseLater/pics/arin.png"
import dan from "../putInDatabaseLater/pics/dan.png"
import ninjaBrian from "../putInDatabaseLater/pics/ninjaBrian.png"
import suzy from "../putInDatabaseLater/pics/suzy.png"
import ross from "../putInDatabaseLater/pics/ross.png"

const useStyles = makeStyles((theme) => ({
header:{
    height:"20vh",
    width:"100%",
    textAlignLast:"center"
}
}))
function Header(){
    const classes=useStyles()
return(
    <div className={classes.header}>
<img src={arin} height="195" width="155"></img>
<img src={dan} height="195" width="155"></img>
<img src={ninjaBrian} height="195" width="155"></img>
<img src={suzy} height="195" width="155"></img>
<img src={ross} height="195" width="155"></img>
    </div>
)
}
export default Header