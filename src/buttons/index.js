import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Small from "./small";
import Medium from "./medium";
import Large from "./large";
import Colorful from "./colorful";
import ColorOutline from "./colorful-outline";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  }
});

class Buttons extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.drawerHeader} />
        <div className={classes.root}>
          <Grid item xs={12} style={{ display: "flex" }}>
            <Small />
          </Grid>
          <Grid item xs={12} style={{ display: "flex" }}>
            <Medium />
          </Grid>
          <Grid item xs={12} style={{ display: "flex" }}>
            <Large />
          </Grid>
          <Grid item xs={12} style={{ display: "flex" }}>
            <Colorful />
          </Grid>
          <Grid item xs={12} style={{ display: "flex" }}>
            <ColorOutline />
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Buttons);
