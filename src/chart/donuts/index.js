import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Highcharts from "highcharts";
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
    plotBackgroundColor: null,
    plotBorderWidth: 0,
    plotShadow: false,
    backgroundColor: {
      linearGradient: [0, 300, 300, 300],
      stops: [[0, "#dce775"], [1, "#cddc39"]],
      type: "line"
    },
    borderRadius: 3,
    height: 300
  },
  title: {
    text: "Browser<br>shares<br>2017",
    align: "center",
    verticalAlign: "middle",
    y: -10
  },
  tooltip: {
    pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
  },
  plotOptions: {
    pie: {
      dataLabels: {
        enabled: true,
        distance: -50,
        style: {
          fontWeight: "bold",
          color: "white"
        }
      },
      startAngle: -90,
      endAngle: -90,
      center: ["50%", "50%"],
      size: "100%"
    }
  },
  series: [
    {
      type: "pie",
      name: "Browser share",
      innerSize: "50%",
      data: [
        ["Chrome", 58.9],
        ["Firefox", 13.29],
        ["Internet Explorer", 13],
        ["Edge", 3.78],
        ["Safari", 3.42],
        {
          name: "Other",
          y: 7.61,
          dataLabels: {
            enabled: false
          }
        }
      ]
    }
  ]
};

class Donuts extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.holder}>
        <div className={classes.chart}>
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
        <Typography variant="h4">Highchart - Donut</Typography>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Donuts);
