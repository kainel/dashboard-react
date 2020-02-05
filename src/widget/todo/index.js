import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import WorkIcon from "@material-ui/icons/Work";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";
import blue from "@material-ui/core/colors/blue";
import purple from "@material-ui/core/colors/purple";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import Config from "../../config/config.js";
import update from "immutability-helper";

const styles = theme => ({
  card: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
    wordWrap: "break-word",
    backgroundColor: "white",
    backgroundClip: "border-box",
    border: "0px solid transparent",
    borderRadius: 3,
    marginBottom: 20
  },
  cardBody: {
    flex: "1 1 auto",
    padding: "1.25rem"
  },
  todoWidget: {
    position: "relative",
    padding: "1.25rem",
    marginBottom: 10,
    touchAction: "auto"
  },
  todoRow: {
    borderBottom: "1px solid transparent",
    padding: 14,
    margin: "10px 0",
    display: "flex"
  },
  root: {
    color: red[600],
    "&$checked": {
      color: green[500]
    }
  },
  checked: {},
  labelDecoration: {
    textDecoration: "line-through"
  },
  labelNone: {},
  chip: {
    margin: theme.spacing.unit,
    float: "right",
    backgroundColor: green[300],
    color: "white"
  },
  avatar: {
    margin: 10,
    backgroundColor: blue[200]
  }
});

class Todo extends React.Component {
  state = {
    checkStyle: false,
    data: Config.widgetConf.todoList
  };

  chipColor(date) {
    switch (date) {
      case "Today":
        return { backgroundColor: green[300] };
      case "Yesterday":
        return { backgroundColor: blue[300] };
      case "1 Week":
        return { backgroundColor: red[300] };
      case "2 Weeks":
        return { backgroundColor: purple[300] };
      default:
        return { backgroundColor: green[300] };
    }
  }
  checks(idx, e, c) {
    if (c) {
      this.setState({
        data: update(this.state.data, {
          [idx]: {
            check: { $set: true }
          }
        })
      });
    } else {
      this.setState({
        data: update(this.state.data, {
          [idx]: {
            check: { $set: false }
          }
        })
      });
    }
  }

  render() {
    const { classes } = this.props;
    const { checkStyle, data } = this.state;
    return (
      <div className={classes.card}>
        <div className={classes.cardBody}>
          <Typography variant={"h4"} style={{ float: "left" }}>
            To Do List
          </Typography>
        </div>
        {data.map((item, index) => (
          <div className={classes.todoWidget}>
            <div style={{ display: "flex", width: "100%" }}>
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<WorkOutlineIcon />}
                    checkedIcon={<WorkIcon />}
                    classes={{ root: classes.root, checked: classes.checked }}
                  />
                }
                label={item.label}
                style={{ float: "left" }}
                onChange={this.checks.bind(this, index)}
                classes={
                  item.check
                    ? { label: classes.labelDecoration }
                    : { label: classes.labelNone }
                }
              />
              <Chip
                label={item.date}
                className={classes.chip}
                style={this.chipColor(item.date)}
              />
            </div>
            <div style={{ display: "flex" }}>
              {item.avatar.map(avData => {
                if (avData.length > 2)
                  return <Avatar className={classes.avatar} src={avData} />;
                else
                  return <Avatar className={classes.avatar}>{avData}</Avatar>;
              })}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Todo);
