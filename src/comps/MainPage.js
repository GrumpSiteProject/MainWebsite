import "../css/mainPage.css"
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { thankMsg, names, profilePics } from '../putInDatabaseLater/strings/ThankYou';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import {useStyles} from "../css/mainPageStyles"

// https://cdn.discordapp.com/avatars/195544804988420096/2be24761d2ba1bf21159555bf3bdff35.png?size=128
function MainPage() {
    function isOdd(num) { return num % 2; }
    const classes = useStyles();
    console.log(names[1])
    return (
        <div>
            <div className={classes.root}>

                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button>Home</Button>
                    <Button>About</Button>
                    <Button>Faq</Button>
                    <Button>HOT GAME GRUMPS FOOTAGE</Button>
                    <Button>local clown snatches in your area</Button>
                </ButtonGroup>
            </div>
            {thankMsg.map((thankMsgs, index) =>
                <div>
                    {isOdd(index) === 0 ?
                        <Box className={classes.thankBox}>
                            <div>
                                <Avatar alt="sbeajy" src={profilePics[index]} className={classes.avatars}></Avatar>
                                <p>{names[index]}</p>
                            </div>
                            <div className={classes.thankText}>
                                <p>{thankMsgs}</p>
                            </div>


                        </Box> :
                        <Box className={classes.oddThankBox}>
                            <div>
                                <Avatar alt="sbeajy" src={profilePics[index]} className={classes.avatars}></Avatar>
                                <p>{names[index]}</p>
                            </div>
                            <div className={classes.thankText}>
                                <p>{thankMsgs}</p>
                            </div>
                        </Box>
                    }
                    <div className={classes.thankSpace}></div>
                </div>
            )}
        </div>
    )
}

export default MainPage

// Sbeajy (Dennis) 21.03.21 :D