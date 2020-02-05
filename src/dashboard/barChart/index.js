import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import DataUsageIcon from "@material-ui/icons/DataUsage";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";

const styles = theme => ({
  card: {
    display: "flex"
  },
  details: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "green",
    borderRadius: "10px",
    width: 600,
    height: 250,
    margin: 10
  },
  content: {
    flex: "1 0 auto",
    backgroundColor: "green",
    color: "white"
  }
});

const options = {
  chart: {
    type: "bar",
    height: 150,
    width: 600,
    backgroundColor: "green"
  },
  title: {
    text: ""
  },
  xAxis: {
    categories: ["John", "Joe", "Amy"],
    labels: {
      style: {
        color: "white"
      }
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: "Sales",
      align: "middle",
      x: -25,
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
  tooltip: {
    pointFormat: "{series.name}: <b>${point.percentage:.1f}</b>"
  },
  legend: {
    reversed: true
  },
  plotOptions: {
    series: {
      stacking: "normal"
    }
  },
  series: [
    {
      showInLegend: false,
      name: "Today",
      data: [5, 3, 4]
    },
    {
      showInLegend: false,
      name: "Yesterday",
      data: [2, 2, 3]
    },
    {
      showInLegend: false,
      name: "Before",
      data: [3, 4, 4]
    }
  ]
};

class BarChart extends React.Component {
  render() {
    const { classes, shiftStyle } = this.props;
    return (
      <div className={classes.card} style={shiftStyle}>
        <div className={classes.details}>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            style={{ color: "white", padding: 10 }}
          >
            Revenue
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
              <MonetizationOnIcon
                style={{ color: "white", verticalAlign: "sub" }}
              />
              {" 34,245"}
            </Typography>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(BarChart);
