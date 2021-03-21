import "../css/mainPage.css"
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import {thankMsg} from '../putInDatabaseLater/strings/ThankYou';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    thankBox:{
        display:"grid",
        gridTemplateColumns:"20% 80%",
        backgroundColor:"aliceblue",
        width:"40vw",
        marginLeft:"18vw",
        borderRadius: "5px"
    },
    thankText:{
        width:"95%",
    },
    avatars:{
        width:"70px",
        height:"70px",
        top:"10px",
        left:"10px"
    },
    thankSpace:{
        height:"10px"
    }
}));
// https://cdn.discordapp.com/avatars/195544804988420096/2be24761d2ba1bf21159555bf3bdff35.png?size=128
function MainPage() {

    console.log(thankMsg)
    const classes = useStyles();
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
            <Box className={classes.thankBox}>
                <div>
                <Avatar alt="sbeajy" src="https://cdn.discordapp.com/avatars/195544804988420096/2be24761d2ba1bf21159555bf3bdff35.png?size=128" className={classes.avatars}></Avatar>
                <p>Sbeajy</p>
                </div>
                <div className={classes.thankText}>
                <p>{thankMsgs}</p>
                </div>
            </Box>
            <div className={classes.thankSpace}></div>
            </div>
            )}
        </div>
    )
}

export default MainPage

// Sbeajy (Dennis) 21.03.21 :D