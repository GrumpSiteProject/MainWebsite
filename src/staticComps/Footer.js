import { makeStyles } from '@material-ui/core/styles';
import spoofy from "../putInDatabaseLater/pics/spoofy.png"
const useStyles = makeStyles((theme) => ({
    footer: {
        top: "100%",
        width: "100%",
        height: "23vh",
        backgroundColor: "currentcolor"
    },
}))
function Footer() {
    const classes = useStyles()
        return (
            <div className={classes.footer}>
                <a href="https://open.spotify.com/artist/1DLBs2535MM32RYqirYYY4?si=2j_tBrZKQoCLSsz8gnz4Ng">
                    <img src={spoofy} alt="spoofy" width="300" height="200"></img>
                </a>
            </div>
        )
    }
export default Footer