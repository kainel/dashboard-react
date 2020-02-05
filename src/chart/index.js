import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import DonutChart from "./donuts";
import BubbleChart from "./bubbles";
import LineChart from "./lines";
import BarChart from "./bars";
import AreaChart from "./areas";
import PieChart from "./pies";
import ScatterChart from "./scatters";
import ColumnChart from "./columns";
import PolarChart from "./polars";

const styles = theme => ({
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  }
});

class Chart extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.drawerHeader} />
        <div style={{ flexGrow: 1 }}>
          <Grid container spacing={24}>
            <Grid item xs={4}>
              <LineChart />
            </Grid>
            <Grid item xs={4}>
              <BarChart />
            </Grid>
            <Grid item xs={4}>
              <AreaChart />
            </Grid>
          </Grid>
          <Grid container spacing={24}>
            <Grid item xs={4}>
              <PieChart />
            </Grid>
            <Grid item xs={4}>
              <ScatterChart />
            </Grid>
            <Grid item xs={4}>
              <BubbleChart />
            </Grid>
          </Grid>
          <Grid container spacing={24}>
            <Grid item xs={4}>
              <ColumnChart />
            </Grid>
            <Grid item xs={4}>
              <DonutChart />
            </Grid>
            <Grid item xs={4}>
              <PolarChart />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Chart);
