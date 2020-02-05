import React from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import NavigationIcon from "@material-ui/icons/Navigation";
import Typography from "@material-ui/core/Typography";
import SaveIcon from "@material-ui/icons/Save";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
import blue from "@material-ui/core/colors/blue";
import cyan from "@material-ui/core/colors/cyan";
import amber from "@material-ui/core/colors/amber";

const styles = theme => ({
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
  margin: {
    margin: theme.spacing.unit
  },
  extendedIconRight: {
    marginRight: theme.spacing.unit
  },
  extendedIconLeft: {
    marginLeft: theme.spacing.unit
  },
  customGreen: {
    color: "white",
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700]
    }
  },
  customPurple: {
    color: "white",
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700]
    }
  },
  customBlue: {
    color: "white",
    backgroundColor: blue[500],
    "&:hover": {
      backgroundColor: blue[700]
    }
  },
  customCyan: {
    color: "white",
    backgroundColor: cyan[500],
    "&:hover": {
      backgroundColor: cyan[700]
    }
  },
  customAmber: {
    color: "white",
    backgroundColor: amber[500],
    "&:hover": {
      backgroundColor: amber[700]
    }
  }
});

class ColorButton extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.card}>
        <div className={classes.cardBody}>
          <Typography variant={"h4"} style={{ float: "left" }}>
            Color
          </Typography>
        </div>
        <div style={{ textAlign: "left" }}>
          <Button
            variant="contained"
            size="medium"
            color="primary"
            className={classes.margin}
          >
            Color
          </Button>
          <Button
            variant="contained"
            size="medium"
            color="secondary"
            className={classes.margin}
          >
            Color
          </Button>
          <Fab
            size="medium"
            aria-label="Add"
            className={classNames(classes.margin, classes.customGreen)}
          >
            <AddIcon />
          </Fab>
          <Fab
            variant="extended"
            size="medium"
            aria-label="Add"
            className={classNames(classes.margin, classes.customPurple)}
            style={{ width: "auto" }}
          >
            <NavigationIcon className={classes.extendedIconRight} />
            Color
          </Fab>
          <Fab
            variant="extended"
            size="medium"
            aria-label="Add"
            className={classNames(classes.margin, classes.customPurple)}
            style={{ width: "auto" }}
          >
            Color
            <NavigationIcon className={classes.extendedIconLeft} />
          </Fab>
          <IconButton
            aria-label="Delete"
            className={classNames(classes.margin, classes.customBlue)}
          >
            <DeleteIcon fontSize="medium" />
          </IconButton>
          <Button
            variant="contained"
            size="medium"
            className={classNames(classes.margin, classes.customCyan)}
          >
            <SaveIcon style={{ marginRight: 5 }} />
            Color
          </Button>
          <Button
            variant="contained"
            size="medium"
            className={classNames(classes.margin, classes.customAmber)}
          >
            Color
            <SaveIcon style={{ marginLeft: 5 }} />
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ColorButton);
