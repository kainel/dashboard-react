import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Highcharts from "highcharts";
import {
  HighchartsChart,
  Chart,
  withHighcharts,
  XAxis,
  YAxis,
  Title,
  Legend,
  LineSeries
} from "react-jsx-highcharts";
import Button from "@material-ui/core/Button";

const createDataPoint = (time = Date.now(), magnitude = 1000, offset = 0) => {
  return [time + offset * magnitude, Math.round(Math.random() * 100 * 2) / 2];
};

const createRandomData = (time, magnitude, points = 100) => {
  const data = [];
  let i = points * -1 + 1;
  for (i; i <= 0; i++) {
    data.push(createDataPoint(time, magnitude, i));
  }
  return data;
};

const addDataPoint = (data, toAdd) => {
  if (!toAdd) toAdd = createDataPoint();
  const newData = data.slice(0); // Clone
  newData.shift();
  newData.push(toAdd);
  return newData;
};

const options = {
  tooltip: {
    formatter: function() {
      return (
        "<b>" +
        this.series.name +
        "</b><br/>" +
        Highcharts.dateFormat("%Y-%m-%d %H:%M:%S", this.x) +
        "<br/>" +
        Highcharts.numberFormat(this.y, 2)
      );
    }
  }
};

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

class DynamicChart extends React.Component {
  constructor(props) {
    super(props);
    this.updateLiveData = this.updateLiveData.bind(this);
    this.handleStartLiveUpdate = this.handleStartLiveUpdate.bind(this);
    this.handleStopLiveUpdate = this.handleStopLiveUpdate.bind(this);

    const now = Date.now();
    this.state = {
      data1: createRandomData(now),
      data2: createRandomData(now),
      liveUpdate: false
    };
  }

  componentDidMount() {
    this.handleStartLiveUpdate();
  }

  updateLiveData() {
    const { data1, data2 } = this.state;

    this.setState({
      data1: addDataPoint(data1),
      data2: addDataPoint(data2)
    });
  }

  handleStartLiveUpdate(e) {
    e && e.preventDefault();
    this.setState({
      liveUpdate: window.setInterval(this.updateLiveData, 1000)
    });
  }

  handleStopLiveUpdate(e) {
    e.preventDefault();
    window.clearInterval(this.state.liveUpdate);
    this.setState({
      liveUpdate: false
    });
  }

  render() {
    const { data1, data2, liveUpdate } = this.state;
    const { classes } = this.props;
    return (
      <div className="dynamicChart">
        <HighchartsChart tooltip={options}>
          <Chart type="spline" />

          <Title>Dynamically updating data</Title>

          <Legend>
            <Legend.Title>Legend</Legend.Title>
          </Legend>

          <XAxis type="datetime">
            <XAxis.Title>Time</XAxis.Title>
          </XAxis>

          <YAxis>
            <YAxis.Title>Pressure (m)</YAxis.Title>
            <LineSeries name="Sensor 1" data={data1} />
            <LineSeries name="Sensor 2" data={data2} />
          </YAxis>
        </HighchartsChart>

        <div>
          {!liveUpdate && (
            <Button
              variant="outlined"
              className={classes.button}
              onClick={this.handleStartLiveUpdate}
            >
              Live update
            </Button>
          )}
          {liveUpdate && (
            <Button
              variant="outlined"
              className={classes.button}
              onClick={this.handleStopLiveUpdate}
            >
              Stop update
            </Button>
          )}
        </div>
      </div>
    );
  }
}

DynamicChart = withStyles(styles, { withTheme: true })(DynamicChart);
export default withHighcharts(DynamicChart, Highcharts);
