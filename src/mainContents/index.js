import React from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Dashboard from "../dashboard";
import Chart from "../chart";
import Widget from "../widget";
import Table from "../table";
import FullWidth from "../fullWidth";
import Form from "../forms";
import Buttons from "../buttons";

const drawerWidth = 240;

const styles = theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth,
    backgroundColor: "#eee"
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
});

class MainContents extends React.Component {
  handleMainPage(menu) {
    if (menu === "Dashboard") return <Dashboard />;
    else if (menu === "Charts") return <Chart />;
    else if (menu === "Widgets") return <Widget />;
    else if (menu === "Tables") return <Table />;
    else if (menu === "Full Width") return <FullWidth />;
    else if (menu === "Forms") return <Form />;
    else if (menu === "Buttons") return <Buttons />;
  }

  render() {
    const { classes, openMenu, sideMenu } = this.props;
    return (
      <main
        className={classNames(classes.content, {
          [classes.contentShift]: openMenu
        })}
      >
        {this.handleMainPage(sideMenu)}
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    openMenu: state.global.openMenu,
    sideMenu: state.global.sideMenu
  };
};

MainContents = connect(
  mapStateToProps,
  null
)(MainContents);
export default withStyles(styles, { withTheme: true })(MainContents);
