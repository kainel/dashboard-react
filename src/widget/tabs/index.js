import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ViewArrayIcon from "@material-ui/icons/ViewArray";
import ViewColumnIcon from "@material-ui/icons/ViewColumn";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import AppBar from "@material-ui/core/AppBar";
import { clickWidgetTab } from "../../redux/actions";
import { connect } from "react-redux";
import Divider from "@material-ui/core/Divider";
import ImageGrid from "./imageGrid";
import ListGrid from "./listGrid";
import AdvancedGrid from "./advancedGrid";

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
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
});

class GridTabs extends React.Component {
  handleChange = (e, v) => {
    this.props.clickWidgetTab(v);
  };
  render() {
    const { classes, widgetTabs } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={widgetTabs}
            onChange={this.handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="Grid One" icon={<ViewArrayIcon />} />
            <Tab label="Grid Two" icon={<ViewColumnIcon />} />
            <Tab label="Grid Three" icon={<ViewModuleIcon />} />
          </Tabs>
        </AppBar>
        <Divider />
        <Typography component="div" style={{ padding: 8 * 3 }}>
          {widgetTabs === 0 && <ImageGrid />}
          {widgetTabs === 1 && <ListGrid />}
          {widgetTabs === 2 && <AdvancedGrid />}
        </Typography>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    widgetTabs: state.widget.widgetTabs
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clickWidgetTab: seq => {
      dispatch(clickWidgetTab(seq));
    }
  };
};

GridTabs = connect(
  mapStateToProps,
  mapDispatchToProps
)(GridTabs);
export default withStyles(styles, { withTheme: true })(GridTabs);
