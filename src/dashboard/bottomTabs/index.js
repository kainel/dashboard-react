import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import SingleGrid from "./singleGrid";
import DynamicChart from "./dynamicChart";
import Profile from "./profile";
import { clickBottomTab } from "../../redux/actions";
import { connect } from "react-redux";

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
});

class BottomTabs extends React.Component {
  handleChange = (event, value) => {
    this.props.clickBottomTab(value);
  };

  render() {
    const { classes, bottomTabs } = this.props;
    return (
      <Paper className={classes.root}>
        <Tabs
          value={bottomTabs}
          onChange={this.handleChange}
          indicatorColor="primary"
          centered
          style={{ backgroundColor: "#2196f3", color: "white" }}
        >
          <Tab label="Simple Grid" />
          <Tab label="Dynamic Chart" />
          <Tab label="Profile" />
        </Tabs>
        <Divider />
        <Typography component="div" style={{ padding: 8 * 3 }}>
          {bottomTabs === 0 && <SingleGrid />}
          {bottomTabs === 1 && <DynamicChart />}
          {bottomTabs === 2 && <Profile />}
        </Typography>
      </Paper>
    );
  }
}

const mapStateToProps = state => {
  return {
    bottomTabs: state.global.bottomTabs
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clickBottomTab: seq => {
      dispatch(clickBottomTab(seq));
    }
  };
};

BottomTabs = connect(
  mapStateToProps,
  mapDispatchToProps
)(BottomTabs);
export default withStyles(styles)(BottomTabs);
