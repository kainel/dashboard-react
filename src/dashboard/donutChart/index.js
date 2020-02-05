import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import DataUsageIcon from "@material-ui/icons/DataUsage";
import WarningIcon from "@material-ui/icons/Warning";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const styles = theme => ({
  card: {
    display: "flex"
  },
  details: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "orange",
    borderRadius: "10px",
    width: 200,
    height: 250,
    margin: 10
  },
  content: {
    flex: "1 0 auto",
    backgroundColor: "orange",
    color: "white"
  }
});

const options = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: 0,
    plotShadow: false,
    height: 150,
    width: 200,
    backgroundColor: "orange"
  },
  title: {
    text: "",
    align: "center",
    verticalAlign: "middle",
    y: 30
  },
  tooltip: {
    pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
  },
  plotOptions: {
    pie: {
      dataLabels: {
        enabled: false,
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
      name: "Total Space",
      innerSize: "40%",
      data: [["Used Space", 98], ["Left Space", 2]]
    }
  ]
};

class DonutChart extends React.Component {
  render() {
    const { classes, theme } = this.props;
    return (
      <div
        className={classes.card}
        title="Get More Space"
        style={{ padding: "0px" }}
      >
        <div className={classes.details}>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            style={{ color: "white", padding: 10 }}
          >
            Used Space
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
              <WarningIcon style={{ color: "red", verticalAlign: "sub" }} />
              {" 49/50GB"}
            </Typography>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(DonutChart);
