import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import DataUsageIcon from "@material-ui/icons/DataUsage";
import GavelIcon from "@material-ui/icons/Gavel";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const styles = theme => ({
  card: {
    display: "flex"
  },
  details: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "red",
    borderRadius: "10px",
    width: 600,
    height: 250,
    margin: 10
  },
  content: {
    flex: "1 0 auto",
    backgroundColor: "red",
    color: "white"
  }
});

const options = {
  chart: {
    type: "scatter",
    zoomType: "xy",
    height: 150,
    width: 600,
    backgroundColor: "red"
  },
  title: {
    text: "December",
    style: {
      color: "white"
    }
  },
  subtitle: {
    text: ""
  },
  xAxis: {
    title: {
      enabled: true,
      text: "Date",
      style: {
        color: "white"
      }
    },
    startOnTick: true,
    endOnTick: true,
    showLastLabel: true,
    labels: {
      style: {
        color: "white"
      }
    }
  },
  yAxis: {
    title: {
      text: "Number",
      style: {
        color: "white"
      }
    },
    labels: {
      style: {
        color: "white"
      }
    }
  },
  legend: {
    layout: "vertical",
    align: "left",
    verticalAlign: "top",
    x: 100,
    y: 0,
    floating: true,
    itemStyle: {
      color: "#FFFFFF"
    },
    backgroundColor:
      (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || "#FF0000",
    borderWidth: 2
  },
  plotOptions: {
    scatter: {
      marker: {
        radius: 5,
        states: {
          hover: {
            enabled: true,
            lineColor: "rgb(255,255,255)"
          }
        }
      },
      states: {
        hover: {
          marker: {
            enabled: false
          }
        }
      },
      tooltip: {
        headerFormat: "<b>{series.name}</b><br>",
        pointFormat: "Dec {point.x}, {point.y}"
      }
    }
  },
  series: [
    {
      name: "Issues",
      color: "rgba(255, 255, 255, 1)",
      data: [[15, 51], [16, 59], [17, 49], [18, 63], [19, 53]]
    }
  ]
};

class BubbleChart extends React.Component {
  render() {
    const { classes, theme } = this.props;
    return (
      <div className={classes.card}>
        <div className={classes.details}>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            style={{ color: "white", padding: 10 }}
          >
            Fixed Issues
          </Typography>
          <div className={classes.content}>
            <HighchartsReact highcharts={Highcharts} options={options} />
          </div>
          <div className={classes.content} style={{ borderRadius: 10 }}>
            <Typography
              variant="subtitle1"
              color="textPrimary"
              style={{ color: "white", padding: 10 }}
            >
              <GavelIcon style={{ color: "white", verticalAlign: "sub" }} />
              {" Today: 75"}
            </Typography>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(BubbleChart);
