import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Chart from "react-google-charts";
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
    backgroundColor: "white",
    boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
    marginBottom: 30,
    borderRadius: 6,
    flexDirection: "column"
  },
  chart: {
    padding: 0,
    marginTop: -35,
    borderRadius: 3,
    background: "linear-gradient(60deg, #ef5350, #e53935)",
    color: "white",
    marginLeft: 15,
    width: "calc(100% - 30px)",
    marginBottom: 15
  }
});

const chartData = [
  {
    name: "Salary",
    data: [["2013", 1000], ["2014", 1170], ["2015", 660], ["2016", 1030]]
  },
  {
    name: "Expenses",
    data: [["2013", 400], ["2014", 500], ["2015", 360], ["2016", 700]]
  }
];

const chartOptions = {
  title: "Company Performance",
  hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
  vAxis: { minValue: 0 }
};

class Areas extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.holder}>
        <div className={classes.chart}>
          <Chart
            width={"100%"}
            height={"300px"}
            chartType="AreaChart"
            loader={<div>Loading Chart</div>}
            data={[
              ["Year", "Sales", "Expenses"],
              ["2013", 1000, 400],
              ["2014", 1170, 460],
              ["2015", 660, 1120],
              ["2016", 1030, 540]
            ]}
            options={{
              title: "Company Performance",
              titleTextStyle: { color: "#fff" },
              hAxis: {
                title: "Year",
                titleTextStyle: { color: "#fff" },
                textStyle: { color: "#fff" }
              },
              vAxis: { minValue: 0, textStyle: { color: "#fff" } },
              // For the legend to fit, we make the chart area smaller
              chartArea: {
                width: "50%",
                height: "70%",
                backgroundColor: "linear-gradient(60deg, #ef5350, #e53935)"
              },
              // lineWidth: 25
              backgroundColor: "red",
              legend: { textStyle: { color: "#fff" } },
              colors: ["black", "white", "red", "green", "yellow", "gray"]
            }}
          />
        </div>
        <Typography variant="h4">Google Chart - Area</Typography>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Areas);
