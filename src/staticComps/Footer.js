import { makeStyles } from '@material-ui/core/styles';
import spoofy from "../putInDatabaseLater/pics/spoofy.png"
const useStyles = makeStyles((theme) => ({
    footer: {
        top: "100%",
        width: "100%",
        height: "23vh",
        backgroundColor: "currentcolor",
        display:"grid",
        gridTemplateColumns:"25% 25% 35% 15%",
        gridAutoRows:"23vh"
    },
    spoofy:{
        gridArea:"0 / 4 / 0 / 4"
    }
}))
function Footer() {
    const classes = useStyles()
        return (
            <div className={classes.footer}>
                <a className={classes.spoofy} href="https://open.spotify.com/artist/1DLBs2535MM32RYqirYYY4?si=2j_tBrZKQoCLSsz8gnz4Ng">
                    <img src={spoofy} alt="spoofy" width="300" height="200"></img>
                </a>
                <a href="https://github.com/GrumpSiteProject/MainWebsite/blob/master/README.md">
                    <p>contributers</p>
                </a>
            </div>
        )
    }
export default Footer