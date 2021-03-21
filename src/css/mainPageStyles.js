import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    thankBox: {
        display: "grid",
        gridTemplateColumns: "15% 85%",
        backgroundColor: "aliceblue",
        width: "40vw",
        marginLeft: "18vw",
        borderRadius: "5px"
    },
    oddThankBox: {
        display: "grid",
        gridTemplateColumns: "15% 85%",
        backgroundColor: "aliceblue",
        width: "40vw",
        marginLeft: "35vw",
        borderRadius: "5px"
    },
    thankText: {
        width: "95%",
    },
    avatars: {
        width: "70px",
        height: "70px",
        top: "10px",
        left: "22px"
    },
    thankSpace: {
        height: "10px"
    },
    username:{
        textAlign:"center"
    }
}));