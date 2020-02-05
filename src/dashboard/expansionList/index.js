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
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Chip from "@material-ui/core/Chip";
import Divider from "@material-ui/core/Divider";
import classNames from "classnames";
import Config from "../../config/config.js";

const styles = theme => ({
  card: {
    display: "flex",
    backgroundColor: "#eeeeee",
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
    background: "linear-gradient(60deg, #ffa726, #fb8c00)",
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
    position: "relative",
    backgroundColor: "#eeeeee"
  },
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15)
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20
  },
  details: {
    alignItems: "center"
  },
  column: {
    flexBasis: "33.33%"
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  }
});

class ExpansionList extends React.Component {
  render() {
    const { classes, theme } = this.props;
    const exList = Config.dashboardConf.expansionTable;
    return (
      <div className={classes.card}>
        <div className={classes.cardTop}>
          <div className={classes.cardTitle}>
            <Typography style={{ color: "inherit" }}>
              Employees Stats: New employees on 15th September, 2018
            </Typography>
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
              />
            </div>
          </div>
        </div>
        <div className={classes.cardBody}>
          <div className={classes.root}>
            {exList.map(item => (
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <div className={classes.column}>
                    <Typography className={classes.heading}>
                      {item.name}
                    </Typography>
                  </div>
                  <div className={classes.column}>
                    <Typography className={classes.secondaryHeading}>
                      Details
                    </Typography>
                  </div>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.details}>
                  <div className={classes.column}>
                    <Typography className={classes.heading}>
                      Simple info
                    </Typography>
                  </div>
                  <div className={classes.column}>
                    <Chip
                      label={item.salary}
                      className={classes.chip}
                      onDelete={() => {}}
                      title="Salary"
                    />
                    &nbsp;
                    <Chip
                      label={item.country}
                      className={classes.chip}
                      onDelete={() => {}}
                      title="Country"
                    />
                  </div>
                  <div className={classNames(classes.column, classes.helper)}>
                    <Typography variant="caption">
                      Show profile
                      <br />
                      <a
                        href="#sub-labels-and-columns"
                        className={classes.link}
                      >
                        more
                      </a>
                    </Typography>
                  </div>
                </ExpansionPanelDetails>
                <Divider />
                <ExpansionPanelActions>
                  <Button size="small">Cancel</Button>
                  <Button size="small" color="primary">
                    Save
                  </Button>
                </ExpansionPanelActions>
              </ExpansionPanel>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ExpansionList);
