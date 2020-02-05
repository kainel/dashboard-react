import React from "react";
import { withStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    marginLeft: "calc(100% - 85%)",
    marginRight: theme.spacing.unit,
    width: "70%"
  },
  formControl: {
    margin: theme.spacing.unit,
    width: "100%"
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  },
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
  chips: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    margin: theme.spacing.unit / 4
  },
  noLabel: {
    marginTop: theme.spacing.unit * 3
  }
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder"
];

class Selection extends React.Component {
  state = {
    age: "",
    name: "hai",
    labelWidth: 0,
    multipleName: []
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleMultipleChange = event => {
    this.setState({ multipleName: event.target.value });
  };

  handleChangeMultiple = event => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    this.setState({
      multipleName: value
    });
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
        <form className={classes.root} autoComplete="off">
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-simple">Single Select Material</InputLabel>
            <Select
              value={this.state.age}
              onChange={this.handleChange}
              inputProps={{
                name: "age",
                id: "age-simple"
              }}
              style={{ width: "100%" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel
              ref={ref => {
                this.InputLabelRef = ref;
              }}
              htmlFor="outlined-age-simple"
            >
              Single Select Material
            </InputLabel>
            <Select
              value={this.state.age}
              onChange={this.handleChange}
              input={
                <OutlinedInput
                  labelWidth={this.state.labelWidth}
                  name="age"
                  id="outlined-age-simple"
                />
              }
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel htmlFor="filled-age-simple">
              Single Select Material
            </InputLabel>
            <Select
              value={this.state.age}
              onChange={this.handleChange}
              input={<FilledInput name="age" id="filled-age-simple" />}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-native-simple">
              Single Select Native
            </InputLabel>
            <Select
              native
              value={this.state.age}
              onChange={this.handleChange}
              inputProps={{
                name: "age",
                id: "age-native-simple"
              }}
            >
              <option value="" />
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </Select>
          </FormControl>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel
              ref={ref => {
                this.InputLabelRef = ref;
              }}
              htmlFor="outlined-age-native-simple"
            >
              Single Select Native
            </InputLabel>
            <Select
              native
              value={this.state.age}
              onChange={this.handleChange}
              input={
                <OutlinedInput
                  name="age"
                  labelWidth={this.state.labelWidth}
                  id="outlined-age-native-simple"
                />
              }
            >
              <option value="" />
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </Select>
          </FormControl>
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel htmlFor="filled-age-native-simple">
              Single Select Native
            </InputLabel>
            <Select
              native
              value={this.state.age}
              onChange={this.handleChange}
              input={<FilledInput name="age" id="filled-age-native-simple" />}
            >
              <option value="" />
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="select-multiple">
              Multiple Select Material
            </InputLabel>
            <Select
              multiple
              value={this.state.multipleName}
              onChange={this.handleMultipleChange}
              input={<Input id="select-multiple" />}
              MenuProps={MenuProps}
            >
              {names.map(item => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="select-multiple-checkbox">
              Multiple Select Material with Checkbox
            </InputLabel>
            <Select
              multiple
              value={this.state.multipleName}
              onChange={this.handleMultipleChange}
              input={<Input id="select-multiple-checkbox" />}
              renderValue={selected => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {names.map(item => (
                <MenuItem key={item} value={item}>
                  <Checkbox
                    checked={this.state.multipleName.indexOf(item) > -1}
                  />
                  <ListItemText primary={item} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="select-multiple-chip">
              Multiple Select Material with Chip
            </InputLabel>
            <Select
              multiple
              value={this.state.multipleName}
              onChange={this.handleMultipleChange}
              input={<Input id="select-multiple-chip" />}
              renderValue={selected => (
                <div className={classes.chips}>
                  {selected.map(value => (
                    <Chip key={value} label={value} className={classes.chip} />
                  ))}
                </div>
              )}
              MenuProps={MenuProps}
            >
              {names.map(item => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(Selection);
