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
    type: "bubble",
    plotBorderWidth: 1,
    zoomType: "xy",
    backgroundColor: {
      linearGradient: [0, 300, 300, 300],
      stops: [[0, "#64b5f6"], [1, "#2196f3"]],
      type: "line"
    },
    height: 300,
    borderRadius: 3
  },

  title: {
    text: "Highcharts bubbles with radial gradient fill"
  },

  xAxis: {
    gridLineWidth: 1
  },

  yAxis: {
    startOnTick: false,
    endOnTick: false
  },

  series: [
    {
      data: [
        [9, 81, 63],
        [98, 5, 89],
        [51, 50, 73],
        [41, 22, 14],
        [58, 24, 20],
        [78, 37, 34],
        [55, 56, 53],
        [18, 45, 70],
        [42, 44, 28],
        [3, 52, 59],
        [31, 18, 97],
        [79, 91, 63],
        [93, 23, 23],
        [44, 83, 22]
      ],
      marker: {
        fillColor: {
          radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
          stops: [
            [0, "rgba(255,255,255,0.5)"],
            [
              1,
              Highcharts.Color(Highcharts.getOptions().colors[0])
                .setOpacity(0.5)
                .get("rgba")
            ]
          ]
        }
      }
    },
    {
      data: [
        [42, 38, 20],
        [6, 18, 1],
        [1, 93, 55],
        [57, 2, 90],
        [80, 76, 22],
        [11, 74, 96],
        [88, 56, 10],
        [30, 47, 49],
        [57, 62, 98],
        [4, 16, 16],
        [46, 10, 11],
        [22, 87, 89],
        [57, 91, 82],
        [45, 15, 98]
      ],
      marker: {
        fillColor: {
          radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
          stops: [
            [0, "rgba(255,255,255,0.5)"],
            [
              1,
              Highcharts.Color(Highcharts.getOptions().colors[1])
                .setOpacity(0.5)
                .get("rgba")
            ]
          ]
        }
      }
    }
  ]
};

class Bubbles extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.holder}>
        <div className={classes.chart}>
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
        <Typography variant="h4">Highchart - Bubble</Typography>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Bubbles);
