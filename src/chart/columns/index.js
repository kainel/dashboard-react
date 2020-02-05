import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Highcharts from "highcharts";
//import Highcharts from "highcharts-more-node";
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
    type: "column",
    backgroundColor: {
      linearGradient: [0, 300, 300, 300],
      stops: [[0, "#e57373"], [1, "#f44336"]],
      type: "line"
    },
    height: 300,
    borderRadius: 3
  },
  title: {
    text: "Monthly Average Rainfall"
  },
  subtitle: {
    text: "Source: WorldClimate.com"
  },
  xAxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
      text: "Rainfall (mm)"
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat:
      '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
    footerFormat: "</table>",
    shared: true,
    useHTML: true
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0
    }
  },
  series: [
    {
      name: "Tokyo",
      data: [
        49.9,
        71.5,
        106.4,
        129.2,
        144.0,
        176.0,
        135.6,
        148.5,
        216.4,
        194.1,
        95.6,
        54.4
      ]
    },
    {
      name: "New York",
      data: [
        83.6,
        78.8,
        98.5,
        93.4,
        106.0,
        84.5,
        105.0,
        104.3,
        91.2,
        83.5,
        106.6,
        92.3
      ]
    },
    {
      name: "London",
      data: [
        48.9,
        38.8,
        39.3,
        41.4,
        47.0,
        48.3,
        59.0,
        59.6,
        52.4,
        65.2,
        59.3,
        51.2
      ]
    },
    {
      name: "Berlin",
      data: [
        42.4,
        33.2,
        34.5,
        39.7,
        52.6,
        75.5,
        57.4,
        60.4,
        47.6,
        39.1,
        46.8,
        51.1
      ]
    }
  ]
};

class Columns extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.holder}>
        <div className={classes.chart}>
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
        <Typography variant="h4">Highchart - Column</Typography>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Columns);
