import React from "react";
import classNames from "classnames";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";

import SideMenu from "../sideMenu";
import TopBar from "../topBar";
import MainContents from "../mainContents";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  }
});

class Layout extends React.Component {
  render() {
    const { classes, open } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <TopBar />
        <SideMenu />
        <MainContents open={open} />
      </div>
    );
  }
}

export default withStyles(styles, { withTemem: true })(Layout);
