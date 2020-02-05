import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Info from "./info";
import MaskInput from "./maskInput";
import Selection from "./selection";
import Checks from "./checks";

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

class Forms extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.drawerHeader} />
        <div className={classes.root}>
          <Grid item xs={12} style={{ display: "flex" }}>
            <Grid item xs={6}>
              <Info />
            </Grid>
            <Grid item xs={6} style={{ marginLeft: 20 }}>
              <MaskInput />
            </Grid>
          </Grid>
          <Grid item xs={12} style={{ display: "flex" }}>
            <Grid item xs={6}>
              <Selection />
            </Grid>
            <Grid item xs={6} style={{ marginLeft: 20 }}>
              <Checks />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Forms);
