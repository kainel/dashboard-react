import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import green from "@material-ui/core/colors/green";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import Switch from "@material-ui/core/Switch";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    marginLeft: "calc(100% - 85%)",
    marginRight: theme.spacing.unit,
    width: "70%"
  },
  formControl: {
    margin: theme.spacing.unit * 3
  },
  group: {
    margin: `${theme.spacing.unit}px 0`
  },
  custom: {
    "&$checked": {
      color: green[500]
    }
  },
  checked: {},
  card: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    wordWrap: "break-word",
    backgroundColor: "white",
    backgroundClip: "border-box",
    border: "0px solid transparent",
    borderRadius: 3,
    marginBottom: 20,
    boxShadow:
      "0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)"
  },
  cardBody: {
    flex: "1 1 auto",
    padding: "1.25rem"
  },
  switchCustom: {
    color: green[300],
    "&$colorChecked": {
      color: green[500],
      "& + $colorBar": {
        backgroundColor: green[500]
      }
    }
  },
  colorBar: {},
  colorChecked: {},
  iOSSwitchBase: {
    "&$iOSChecked": {
      color: theme.palette.common.white,
      "& + $iOSBar": {
        backgroundColor: "rgb(225, 0, 80)"
      }
    },
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.sharp
    })
  },
  iOSSwitchPrimary: {
    "&$iOSChecked": {
      color: theme.palette.common.white,
      "& + $iOSBar": {
        backgroundColor: "#2196f3"
      }
    },
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.sharp
    })
  },
  iOSSwitchCustom: {
    "&$iOSChecked": {
      color: theme.palette.common.white,
      "& + $iOSBar": {
        backgroundColor: "#52d869"
      }
    },
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.sharp
    })
  },
  iOSChecked: {
    transform: "translateX(15px)",
    "& + $iOSBar": {
      opacity: 1,
      border: "none"
    }
  },
  iOSBar: {
    borderRadius: 13,
    width: 42,
    height: 26,
    marginTop: -13,
    marginLeft: -21,
    border: "solid 1px",
    borderColor: theme.palette.grey[400],
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"])
  },
  iOSIcon: {
    width: 24,
    height: 24
  },
  iOSIconChecked: {
    boxShadow: theme.shadows[1]
  }
});

class Checks extends React.Component {
  state = {
    value: "first",
    checkedA: true,
    checkedB: true,
    checkedC: true,
    checkedD: true,
    checkedE: true,
    checkedF: true,
    checkedG: true,
    checkedH: true,
    checkedI: true,
    checkedJ: true,
    checkedK: false
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleCheckBoxChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  handleSwitchChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.card}>
        <div className={classes.cardBody}>
          <Typography variant={"h4"} style={{ float: "left" }}>
            Select Elements
          </Typography>
        </div>
        <div className={classes.root}>
          <FormControl component="fieldset" className={classes.formControl}>
            <RadioGroup
              aria-label="Gender"
              name="gender1"
              className={classes.group}
              value={this.state.value}
              onChange={this.handleChange}
            >
              <FormControlLabel
                value="first"
                control={<Radio />}
                label="First"
              />
              <FormControlLabel
                value="second"
                control={<Radio color="primary" />}
                label="Second"
              />
              <FormControlLabel
                value="third"
                control={
                  <Radio
                    classes={{
                      root: classes.custom,
                      checked: classes.checked
                    }}
                  />
                }
                label="Third"
              />
              <FormControlLabel
                value="disabled"
                disabled
                control={<Radio />}
                label="(Disabled option)"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div>
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.checkedA}
                onChange={this.handleCheckBoxChange("checkedA")}
                value="checkedA"
              />
            }
            label="First"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.checkedB}
                onChange={this.handleCheckBoxChange("checkedB")}
                value="checkedB"
                color="primary"
              />
            }
            label="Second"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.checkedG}
                onChange={this.handleCheckBoxChange("checkedG")}
                value="checkedG"
                classes={{
                  root: classes.custom,
                  checked: classes.checked
                }}
              />
            }
            label="Third"
          />
          <FormControlLabel
            disabled
            control={<Checkbox checked value="checkedE" />}
            label="Disabled"
          />
        </div>
        <div>
          <FormControlLabel
            control={
              <Switch
                checked={this.state.checkedC}
                onChange={this.handleSwitchChange("checkedC")}
                value="checkedC"
              />
            }
            label="First"
          />
          <FormControlLabel
            control={
              <Switch
                checked={this.state.checkedD}
                onChange={this.handleSwitchChange("checkedD")}
                value="checkedD"
                color="primary"
              />
            }
            label="Second"
          />
          <FormControlLabel
            control={
              <Switch
                checked={this.state.checkedE}
                onChange={this.handleSwitchChange("checkedE")}
                value="checkedE"
                classes={{
                  switchBase: classes.switchCustom,
                  checked: classes.colorChecked,
                  bar: classes.colorBar
                }}
              />
            }
            label="Third"
          />
          <FormControlLabel
            disabled
            control={<Switch value="checkedD" />}
            label="Disabled"
          />
        </div>
        <div>
          <FormControlLabel
            control={
              <Switch
                classes={{
                  switchBase: classes.iOSSwitchBase,
                  bar: classes.iOSBar,
                  icon: classes.iOSIcon,
                  iconChecked: classes.iOSIconChecked,
                  checked: classes.iOSChecked
                }}
                disableRipple
                checked={this.state.checkedH}
                onChange={this.handleSwitchChange("checkedH")}
                value="checkedH"
              />
            }
            label="First"
          />
          <FormControlLabel
            control={
              <Switch
                classes={{
                  switchBase: classes.iOSSwitchPrimary,
                  bar: classes.iOSBar,
                  icon: classes.iOSIcon,
                  iconChecked: classes.iOSIconChecked,
                  checked: classes.iOSChecked
                }}
                disableRipple
                checked={this.state.checkedI}
                onChange={this.handleSwitchChange("checkedI")}
                value="checkedI"
              />
            }
            label="Second"
          />
          <FormControlLabel
            control={
              <Switch
                classes={{
                  switchBase: classes.iOSSwitchCustom,
                  bar: classes.iOSBar,
                  icon: classes.iOSIcon,
                  iconChecked: classes.iOSIconChecked,
                  checked: classes.iOSChecked
                }}
                disableRipple
                checked={this.state.checkedJ}
                onChange={this.handleSwitchChange("checkedJ")}
                value="checkedJ"
              />
            }
            label="Third"
          />
          <FormControlLabel
            disabled
            control={
              <Switch
                classes={{
                  switchBase: classes.iOSSwitchCustom,
                  bar: classes.iOSBar,
                  icon: classes.iOSIcon,
                  iconChecked: classes.iOSIconChecked,
                  checked: classes.iOSChecked
                }}
                disableRipple
                checked={this.state.checkedK}
                onChange={this.handleSwitchChange("checkedK")}
                value="checkedK"
              />
            }
            label="Disabled"
          />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Checks);
