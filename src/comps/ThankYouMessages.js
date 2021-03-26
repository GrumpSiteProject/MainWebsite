import React from "react";
import PropTypes from "prop-types";

// Material UI components
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

// Material UI stlying
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../assets/styles/ThankYouMessagesStyles";

// Text truncation components
import LinesEllipsis from "react-lines-ellipsis";
import responsiveHOC from "react-lines-ellipsis/lib/responsiveHOC";
const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);

// Read more component
function MessageFooter(props) {
  if (props.clamped) {
    return (
      <CardActions>
        <Grid container direction="row" justify="flex-end">
          <Button size="small" onClick={props.onClick}>
            More
          </Button>
        </Grid>
      </CardActions>
    );
  } else {
    return <div></div>;
  }
}

// Main component class
class ThankYouMessages extends React.Component {
  constructor(props) {
    super(props);

    // Import JSON data
    let messages = require("../assets/putInDatabaseLater/strings/ThankYou.json").map(
      (data) => {
        return {
          name: data.name,
          avatar: data.avatar,
          text: data.text,
          clamped: false,
        };
      }
    );

    this.state = {
      messages,
      dialogOpen: false,
      dialog: {
        name: "",
        avatar: "",
        text: "",
      },
    };
  }

  // Sets truncation state for a message
  handleReflow(e, i) {
    if (this.state.messages[i].clamped !== e.clamped) {
      let newMessages = this.state.messages.slice();

      if (e && e.clamped) {
        newMessages[i].clamped = true;
      } else {
        newMessages[i].clamped = false;
      }

      this.setState({ messages: newMessages });
    }
  }

  // Opens dialog box for given message
  handleOpen(message) {
    this.setState({
      dialogOpen: true,
      dialog: {
        name: message.name,
        avatar: message.avatar,
        text: message.text,
      },
    });
  }

  // Closes dialog box
  handleClose() {
    this.setState({ dialogOpen: false });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Container className={classes.messageWrapper} maxWidth="lg">
          {this.state.messages.map((message, i) => (
            <Grid
              key={i}
              container
              direction="row"
              spacing={8}
              justify={i % 2 ? "flex-end" : "flex-start"}
            >
              <Grid item sm={12} md={8}>
                <Card
                  className={i % 2 ? classes.messageRight : classes.messageLeft}
                >
                  <CardContent>
                    <Grid container direction="row" spacing={3}>
                      <Grid
                        item
                        className={message.clamped ? classes.clamped : ""}
                      >
                        <Grid container direction="column" alignItems="center">
                          <Grid item>
                            <Avatar
                              className={classes.avatar}
                              alt={message.name}
                              src={message.avatar}
                            ></Avatar>
                          </Grid>

                          <Grid item>
                            <b>{message.name}</b>
                          </Grid>
                        </Grid>
                      </Grid>

                      <Grid
                        item
                        className={message.clamped ? classes.clamped : ""}
                        xs
                      >
                        <Box>
                          <ResponsiveEllipsis
                            text={message.text}
                            maxLine="4"
                            ellipsis="..."
                            trimRight
                            basedOn="letters"
                            onReflow={(e) => this.handleReflow(e, i)}
                          />
                        </Box>
                      </Grid>
                    </Grid>
                  </CardContent>

                  <MessageFooter
                    clamped={message.clamped}
                    onClick={() => this.handleOpen(message)}
                  />
                </Card>
              </Grid>
            </Grid>
          ))}
        </Container>

        <Dialog
          open={this.state.dialogOpen}
          onClose={() => this.handleClose()}
          aria-labelledby="dialog-title"
          aria-describedby="dialog-description"
        >
          <DialogContent style={{ overflow: "hidden" }}>
            <Grid container direction="row" spacing={3}>
              <Grid item>
                <Grid container direction="column" alignItems="center">
                  <Grid item>
                    <Avatar
                      className={classes.avatar}
                      alt={this.state.dialog.name}
                      src={this.state.dialog.avatar}
                    ></Avatar>
                  </Grid>

                  <Grid item>
                    <b>{this.state.dialog.name}</b>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs>
                {this.state.dialog.text}
              </Grid>
            </Grid>
          </DialogContent>

          <DialogActions>
            <Button onClick={() => this.handleClose()} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

// Inject Material UI Style classes
ThankYouMessages.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ThankYouMessages);

// Sbeajy (Dennis) 21.03.21 :D
