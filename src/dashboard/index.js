import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import DonutChart from "./donutChart";
import BarChart from "./barChart";
import BubbleChart from "./bubbleChart";
import LineChart from "./lineChart";
import TodoList from "./todoList";
import ExpansionList from "./expansionList";
import BottomTabs from "./bottomTabs";
import { connect } from "react-redux";

const styles = theme => ({
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  }
});

class Dashboard extends React.Component {
  render() {
    const { classes, openMenu } = this.props;
    return (
      <div>
        <div className={classes.drawerHeader} />
        <div style={{ flexGrow: 1 }}>
          <Grid container spacing={24}>
            <Grid item xs={2}>
              <DonutChart />
            </Grid>
            <Grid item xs={4}>
              <BarChart
                shiftStyle={openMenu ? { marginLeft: -65 } : { marginLeft: 0 }}
              />
            </Grid>
            <Grid item xs={4}>
              <BubbleChart />
            </Grid>
            <Grid item xs={2}>
              <LineChart />
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid container spacing={24}>
            <Grid item xs={6}>
              <TodoList />
            </Grid>
            <Grid item xs={6}>
              <ExpansionList />
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid container spacing={24}>
            <BottomTabs />
          </Grid>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    openMenu: state.global.openMenu
  };
};

Dashboard = connect(
  mapStateToProps,
  null
)(Dashboard);
export default withStyles(styles, { withTheme: true })(Dashboard);
