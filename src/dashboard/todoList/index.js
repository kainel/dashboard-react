import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import BugReportIcon from "@material-ui/icons/BugReport";
import PageviewIcon from "@material-ui/icons/Pageview";
import CloudIcon from "@material-ui/icons/Cloud";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Checkbox from "@material-ui/core/Checkbox";
import CreateIcon from "@material-ui/icons/Create";
import ClearIcon from "@material-ui/icons/Clear";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Config from "../../config/config.js";
import { clickTodoButton } from "../../redux/actions";
import { connect } from "react-redux";
import update from "immutability-helper";

const styles = theme => ({
  card: {
    display: "flex",
    backgroundColor: "white",
    color: "black",
    width: "100%",
    border: 0,
    position: "relative",
    minWidth: 0,
    wordWrap: "break-word",
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 6,
    flexDirection: "column",
    boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)"
  },
  cardTop: {
    padding: 15,
    marginTop: -20,
    borderRadius: 3,
    background: "linear-gradient(60deg, #ab47bc, #8e24aa)",
    boxShadow:
      "0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)",
    color: "white",
    position: "relative",
    margin: "0px -15px 15px 15px",
    height: 74
  },
  cardTitle: {
    float: "left",
    padding: "10px 10px 10px 0px",
    lineHeight: 24
  },
  cardTitleBody: {
    minHeight: "unset !important",
    overflowX: "visible",
    marginTop: -7
  },
  cardBody: {
    flex: "1 1 auto",
    padding: "0.9375rem 20px",
    position: "relative"
  },
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  }
});

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: Config.dashboardConf.todoList,
      contents: Config.dashboardConf.todoListTable
    };

    this.handleTableCheck = this.handleTableCheck.bind(this);
  }

  checkIcons(title) {
    const { classes } = this.props;
    if (title === "BUGS") return <BugReportIcon className={classes.leftIcon} />;
    else if (title === "WEBSITE")
      return <PageviewIcon className={classes.leftIcon} />;
    else if (title === "SERVER")
      return <CloudIcon className={classes.leftIcon} />;
  }

  selectIcons(select) {
    const selectStyle = {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      transition: "0.2s background-color 0.1s"
    };
    const unSelectStyle = {
      backgroundColor: "rgba(255, 255, 255, 0)",
      transition: "0.2s background-color 0.1s"
    };
    if (select) return selectStyle;
    else return unSelectStyle;
  }

  handleClick(seq) {
    const { clickTodoButton } = this.props;
    clickTodoButton(seq);

    this.state.menus.map((item, index) => {
      if (index === seq) return (item.select = !item.select);
      else return (item.select = false);
    });
  }

  handleTableCheck(e, seq) {
    const check = this.state.contents[seq].check;
    this.setState({
      contents: update(this.state.contents, {
        [seq]: {
          check: { $set: !check }
        }
      })
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.card}>
        <div className={classes.cardTop}>
          <div className={classes.cardTitle}>
            <Typography style={{ color: "inherit" }}> Tasks: </Typography>
          </div>
          <div className={classes.cardTitleBody}>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  flex: "1 1 auto",
                  display: "inline-block",
                  position: "relative",
                  whiteSpace: "nowrap",
                  marginBottom: "-17px"
                }}
              >
                <div style={{ display: "flex" }}>
                  {this.state.menus.map((item, index) => (
                    <Button
                      color="inherit"
                      className={classes.button}
                      style={this.selectIcons(item.select)}
                      onClick={this.handleClick.bind(this, index)}
                    >
                      {this.checkIcons(item.title)}
                      {item.title}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.cardBody}>
          <div>
            <Table>
              <TableBody>
                {this.state.contents.map((item, index) => {
                  return (
                    this.state.contents.length - this.props.todoButtons >
                      index && (
                      <TableRowRes
                        item={item}
                        index={index}
                        handleTableCheck={this.handleTableCheck}
                      />
                    )
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

const TableRowRes = ({ item, index, handleTableCheck }) => {
  return (
    <TableRow>
      <TableCell padding="none">
        <Checkbox
          checked={item.check}
          onClick={e => handleTableCheck(e, index)}
        />
      </TableCell>
      <TableCell padding="none">
        <Typography>{item.contents}</Typography>
      </TableCell>
      <TableCell padding="none">
        <Tooltip title="Edit" placement="top">
          <IconButton style={{ padding: "6px" }}>
            <CreateIcon color="primary" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Remove" placement="top">
          <IconButton style={{ padding: "6px" }}>
            <ClearIcon color="error" />
          </IconButton>
        </Tooltip>
      </TableCell>
    </TableRow>
  );
};

const mapStateToProps = state => {
  return {
    todoButtons: state.global.todoButtons
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clickTodoButton: seq => {
      dispatch(clickTodoButton(seq));
    }
  };
};

TodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
export default withStyles(styles, { withTheme: true })(TodoList);
