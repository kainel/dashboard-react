import React from "react";
import { withStyles } from "@material-ui/core/styles";
//import Highcharts from "highcharts";
import Highcharts from "highcharts-more-node";
import HighchartsReact from "highcharts-react-official";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  holder: {
    display: "flex",
    color: "rgba(0,0,0,0.87)",
    width: "100%",
    border: 0,
    position: "relative",
    minWidth: 0,
    wordWrap: "break-word",
    fontSize: ".875rem",
    marginTop: 30,
    background: "white",
    boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
    marginBottom: 30,
    borderRadius: 6,
    flexDirection: "column"
  },
  chart: {
    padding: 15,
    marginTop: -50,
    borderRadius: 3
  }
});

const options = {
  chart: {
    polar: true,
    backgroundColor: {
      linearGradient: [0, 300, 300, 300],
      stops: [[0, "#a1887f"], [1, "#795548"]],
      type: "line"
    },
    height: 300,
    borderRadius: 3
  },
  title: {
    text: "Highcharts Polar Chart",
    style: {
      color: "white"
    }
  },
  subtitle: {
    text: "Also known as Radar Chart",
    style: {
      color: "white"
    }
  },
  pane: {
    startAngle: 0,
    endAngle: 360
  },
  xAxis: {
    tickInterval: 45,
    min: 0,
    max: 360,
    labels: {
      format: "{value}°",
      style: {
        color: "white"
      }
    }
  },
  yAxis: {
    min: 0,
    labels: {
      style: {
        color: "white"
      }
    }
  },
  plotOptions: {
    series: {
      pointStart: 0,
      pointInterval: 45
    },
    column: {
      pointPadding: 0,
      groupPadding: 0
    }
  },
  series: [
    {
      type: "column",
      name: "Column",
      data: [8, 7, 6, 5, 4, 3, 2, 1],
      pointPlacement: "between"
    },
    {
      type: "line",
      name: "Line",
      data: [1, 2, 3, 4, 5, 6, 7, 8]
    },
    {
      type: "area",
      name: "Area",
      data: [1, 8, 2, 7, 3, 6, 4, 5]
    }
  ]
};

class Polars extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.holder}>
        <div className={classes.chart}>
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
        <Typography variant="h4">Highchart - Polar</Typography>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Polars);
