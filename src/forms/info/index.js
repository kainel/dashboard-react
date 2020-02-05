import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    width: "100%",
    overflowX: "auto",
    borderRadius: 0,
    boxShadow: "none"
  },
  table: {
    minWidth: 700
  },
  card: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    wordWrap: "break-word",
    backgroundColor: "white",
    backgroundClip: "border-box",
    border: "0px solid transparent",
    borderRadius: 3,
    marginBottom: 20,
    boxShadow:
      "0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)"
  },
  cardBody: {
    flex: "1 1 auto",
    padding: "1.25rem"
  },
  textField: {
    marginLeft: "calc(100% - 85%)",
    marginRight: theme.spacing.unit,
    width: "70%"
  },
  dense: {
    marginTop: 19
  }
});

class Info extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    age: "",
    multiline: "Controlled",
    currency: "EUR"
  };

  handleFirstChange = firstName => event => {
    this.setState({ [firstName]: event.target.value });
  };

  handleSecondChange = lastName => event => {
    this.setState({ [lastName]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.card}>
        <div className={classes.cardBody}>
          <Typography variant={"h4"} style={{ float: "left" }}>
            Personal Info
          </Typography>
        </div>
        <TextField
          id="standard-firstName"
          label="First Name Here"
          className={classes.textField}
          value={this.state.firstName}
          onChange={this.handleFirstChange("firstName")}
          margin="normal"
        />
        <TextField
          id="standard-lastName"
          label="Last Name Here"
          className={classes.textField}
          value={this.state.lastName}
          onChange={this.handleSecondChange("lastName")}
          margin="normal"
        />
        <TextField
          id="standard-password-input"
          label="Password Here"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          helperText="Must be entered"
          margin="normal"
        />
        <TextField
          id="standard-company"
          label="Company Name Here"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="standard-contact"
          label="Contact No Here"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="standard-multiline-static"
          label="Message"
          multiline
          rows="4"
          className={classes.textField}
          margin="normal"
        />
        <Button variant="contained" color="primary">
          Submit
        </Button>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Info);
