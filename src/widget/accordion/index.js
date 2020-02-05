import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreIcon from "@material-ui/icons/More";
import Config from "../../config/config.js";

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
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
});

class Accordion extends React.Component {
  state = {
    expanded: null
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;
    const data = Config.widgetConf.arccodionConf;
    return (
      <div className={classes.card}>
        <div className={classes.cardBody}>
          <Typography variant={"h4"} style={{ float: "left" }}>
            Accordion
          </Typography>
        </div>
        <div className={classes.root}>
          {data.map((item, index) => (
            <ExpansionPanel
              expanded={expanded === `panel${index}`}
              onChange={this.handleChange(`panel${index}`)}
            >
              <ExpansionPanelSummary expandIcon={<MoreIcon />}>
                <Typography className={classes.heading}>
                  {item.title}
                </Typography>
                <Typography className={classes.secondaryHeading}>
                  {item.subTitle}
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>{item.contents}</Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          ))}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Accordion);
