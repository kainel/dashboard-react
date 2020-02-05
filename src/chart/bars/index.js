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
    type: "bar",
    backgroundColor: {
      linearGradient: [0, 300, 300, 300],
      stops: [[0, "#66bb6a"], [1, "#43a047"]],
      type: "line"
    },
    borderRadius: 3,
    height: 300
  },
  title: {
    text: "Historic World Population by Region"
  },
  subtitle: {
    text:
      'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
  },
  xAxis: {
    categories: ["Africa", "America", "Asia", "Europe", "Oceania"],
    title: {
      text: null
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: "Population (millions)",
      align: "high"
    },
    labels: {
      overflow: "justify"
    }
  },
  tooltip: {
    valueSuffix: " millions"
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true
      }
    }
  },
  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "top",
    x: -40,
    y: 80,
    floating: true,
    borderWidth: 1,
    backgroundColor:
      (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || "#FFFFFF",
    shadow: true
  },
  credits: {
    enabled: false
  },
  series: [
    {
      name: "Year 1800",
      data: [107, 31, 635, 203, 2]
    },
    {
      name: "Year 1900",
      data: [133, 156, 947, 408, 6]
    },
    {
      name: "Year 2000",
      data: [814, 841, 3714, 727, 31]
    },
    {
      name: "Year 2016",
      data: [1216, 1001, 4436, 738, 40]
    }
  ]
};

class Bars extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.holder}>
        <div className={classes.chart}>
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
        <Typography variant="h4">Highchart - Bar</Typography>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Bars);
