import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import DataUsageIcon from "@material-ui/icons/DataUsage";
import CallMadeIcon from "@material-ui/icons/CallMade";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const styles = theme => ({
  card: {
    display: "flex"
  },
  details: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "blue",
    borderRadius: "10px",
    width: 200,
    height: 250,
    margin: 10
  },
  content: {
    flex: "1 0 auto",
    backgroundColor: "blue",
    color: "white"
  }
});

const options = {
  chart: {
    type: "spline",
    inverted: true,
    height: 150,
    width: 200,
    backgroundColor: "blue"
  },
  title: {
    text: ""
  },
  subtitle: {
    text: ""
  },
  xAxis: {
    reversed: false,
    title: {
      enabled: true,
      text: "Number",
      style: {
        color: "white"
      }
    },
    labels: {
      format: "{value}",
      style: {
        color: "white"
      }
    },
    maxPadding: 0.05,
    showLastLabel: true
  },
  yAxis: {
    title: {
      text: "Date",
      style: {
        color: "white"
      }
    },
    labels: {
      format: "{value}",
      style: {
        color: "white"
      }
    },
    lineWidth: 2
  },
  legend: {
    enabled: false
  },
  tooltip: {
    headerFormat: "<b>{series.name}</b><br/>",
    pointFormat: "Dec {point.y}: {point.x}"
  },
  plotOptions: {
    spline: {
      marker: {
        enable: false
      }
    }
  },
  series: [
    {
      name: "Followers",
      data: [[15, 15], [13, 16], [20, 17], [15, 18], [30, 19]]
    }
  ]
};

class LineChart extends React.Component {
  render() {
    const { classes, theme } = this.props;
    return (
      <div className={classes.card} style={{ padding: "0px 60px" }}>
        <div className={classes.details}>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            style={{ color: "white", padding: 10 }}
          >
            Followers
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
              <CallMadeIcon style={{ color: "white", verticalAlign: "sub" }} />
              {" +93"}
            </Typography>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(LineChart);
