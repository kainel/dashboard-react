import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import NavigationIcon from "@material-ui/icons/Navigation";
import Typography from "@material-ui/core/Typography";
import SaveIcon from "@material-ui/icons/Save";

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
  }
});

class SmallButton extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.card}>
        <div className={classes.cardBody}>
          <Typography variant={"h4"} style={{ float: "left" }}>
            Small Buttons
          </Typography>
        </div>
        <div style={{ textAlign: "left" }}>
          <Button size="small" className={classes.margin}>
            Small
          </Button>
          <Button
            variant="outlined"
            size="small"
            color="primary"
            className={classes.margin}
          >
            Small
          </Button>
          <Button
            variant="contained"
            size="small"
            color="primary"
            className={classes.margin}
          >
            Small
          </Button>
          <Fab
            size="small"
            color="secondary"
            aria-label="Add"
            className={classes.margin}
          >
            <AddIcon />
          </Fab>
          <Fab
            variant="extended"
            size="small"
            color="primary"
            aria-label="Add"
            className={classes.margin}
            style={{ width: "auto" }}
          >
            <NavigationIcon className={classes.extendedIconRight} />
            Small
          </Fab>
          <Fab
            variant="extended"
            size="small"
            color="primary"
            aria-label="Add"
            className={classes.margin}
            style={{ width: "auto" }}
          >
            Small
            <NavigationIcon className={classes.extendedIconLeft} />
          </Fab>
          <IconButton aria-label="Delete" className={classes.margin}>
            <DeleteIcon fontSize="small" />
          </IconButton>
          <Button variant="contained" size="small" className={classes.margin}>
            <SaveIcon style={{ marginRight: 5 }} />
            Small
          </Button>
          <Button variant="contained" size="small" className={classes.margin}>
            Small
            <SaveIcon style={{ marginLeft: 5 }} />
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(SmallButton);
