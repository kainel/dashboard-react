import React from "react";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import InsertChartIcon from "@material-ui/icons/InsertChart";
import WidgetIcon from "@material-ui/icons/BubbleChart";
import TableIcon from "@material-ui/icons/BorderInner";
import GridOnIcon from "@material-ui/icons/GridOn";
import FormsIcon from "@material-ui/icons/ListAlt";
import ButtonIcon from "@material-ui/icons/CheckBox";
import FaceIcon from "@material-ui/icons/Face";
import ElementsIcon from "@material-ui/icons/Create";
import { withStyles } from "@material-ui/core/styles";
import Config from "../config/config.js";
import { setOpenMenu, setSideMenus } from "../redux/actions";
import { connect } from "react-redux";

const drawerWidth = 240;

const styles = theme => ({
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  }
});

class SideMenu extends React.Component {
  constructor(props) {
    super(props);

    this.handleOpenMenu = this.handleOpenMenu.bind(this);
  }

  checkIcons(title) {
    if (title === "Dashboard") return <DashboardIcon />;
    else if (title === "Charts") return <InsertChartIcon />;
    else if (title === "Widgets") return <WidgetIcon />;
    else if (title === "Tables") return <TableIcon />;
    else if (title === "Full Width") return <GridOnIcon />;
    else if (title === "Forms") return <FormsIcon />;
    else if (title === "Buttons") return <ButtonIcon />;
    else if (title === "Icons") return <FaceIcon />;
    else if (title === "Elements") return <ElementsIcon />;
  }

  handleOpenMenu() {
    this.props.setOpenMenu(!this.props.openMenu);
  }

  handleSideMenu(menu) {
    this.props.setSideMenus(menu);
  }
  render() {
    const { classes, theme, openMenu } = this.props;
    const menus = Config.sideMenuConf;
    return (
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={openMenu}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={this.handleOpenMenu}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {menus.map(item => (
            <ListItem
              button
              onClick={this.handleSideMenu.bind(this, item.title)}
            >
              <ListItemIcon>{this.checkIcons(item.title)}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    );
  }
}

const mapStateToProps = state => {
  return {
    openMenu: state.global.openMenu,
    sideMenu: state.global.sideMenu
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setOpenMenu: show => {
      dispatch(setOpenMenu(show));
    },
    setSideMenus: menu => {
      dispatch(setSideMenus(menu));
    }
  };
};

SideMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(SideMenu);
export default withStyles(styles, { withTheme: true })(SideMenu);
