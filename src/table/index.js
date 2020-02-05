import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import BasicTables from "./basicTables";
import EnhancedTables from "./enhancedTables";
import CartTables from "./cartTables";

const styles = theme => ({
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  }
});

class TablePage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.drawerHeader} />
        <div style={{ flexGrow: 1 }}>
          <Grid container spacing={24}>
            <BasicTables />
          </Grid>
          <Grid container spacing={24}>
            <EnhancedTables />
          </Grid>
          <Grid container spacing={24}>
            <CartTables />
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(TablePage);
