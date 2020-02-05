import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import RecentPosts from "./posts";
import TodoList from "./todo";
import Accordion from "./accordion";
import GridTab from "./tabs";

const styles = theme => ({
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  }
});

class Widget extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.drawerHeader} />
        <div style={{ flexGrow: 1 }}>
          <Grid container spacing={24}>
            <Grid item xs={6}>
              <RecentPosts />
            </Grid>
            <Grid item xs={6}>
              <TodoList />
            </Grid>
          </Grid>
          <Grid container spacing={24}>
            <Grid item xs={6}>
              <Accordion />
            </Grid>
            <Grid item xs={6}>
              <GridTab />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Widget);
