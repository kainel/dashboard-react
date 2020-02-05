import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ReactChartkick, { PieChart } from "react-chartkick";
import Chart from "chart.js";
import Typography from "@material-ui/core/Typography";
import pattern from "patternomaly";

ReactChartkick.addAdapter(Chart);

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
    background: "linear-gradient(60deg, #ab47bc, #8e24aa)",
    color: "white",
    marginLeft: 15,
    width: "calc(100% - 30px)",
    marginBottom: 15
  }
});

const data = {
  datasets: [
    {
      data: [44, 25, 20, 10]
    }
  ],
  labels: ["Red", "Blue", "Purple", "Yellow"],
  color: ["red", "blue", "purple", "yellow"]
};

const piedata = [["Red", 44], ["Blue", 25], ["Purple", 20], ["Yellow", 10]];

class Pies extends React.Component {
  componentDidMount() {
    //const ctx = document.getElementById("canvas").getContext("2d");
    //const fillPattern = ctx.createPattern(img, 'repeat');
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.holder}>
        <div className={classes.chart}>
          <PieChart
            data={piedata}
            colors={["red", "blue", "purple", "yellow"]}
            legend={false}
          />
        </div>
        <Typography variant="h4">Chartkick - Pie</Typography>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Pies);
