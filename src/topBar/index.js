import React from "react";
import classNames from "classnames";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import AccountCircle from "@material-ui/icons/AccountCircle";
import AccountIcon from "@material-ui/icons/Person";
import SettingIcon from "@material-ui/icons/Settings";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { setOpenMenu, setOpenAccount } from "../redux/actions";
import { connect } from "react-redux";

const drawerWidth = 240;

const styles = theme => ({
  grow: {
    flexGrow: 1
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    backgroundColor: "#2196f3"
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit * 3,
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 100
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  menuItem: {
    "&:focus": {
      backgroundColor: theme.palette.common.grey,
      "& $primary, & $icon": {
        color: theme.palette.common.grey
      }
    }
  },
  primary: {},
  icon: {}
});

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      mobileMoreAnchorEl: null
    };

    this.handleOpenMenuAcoount = this.handleOpenMenuAcoount.bind(this);
    this.handleMenuClose = this.handleMenuClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  handleOpenMenuAcoount = event => {
    this.props.setOpenAccount(!this.props.openAccount);
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose() {
    this.props.setOpenAccount(!this.props.openAccount);
    this.setState({ anchorEl: null });
  }

  handleOpen() {
    this.props.setOpenMenu(!this.props.openMenu);
  }

  render() {
    const { classes, theme, openMenu, openAccount } = this.props;
    const { anchorEl } = this.state;

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={openAccount}
        onClose={this.handleMenuClose}
        style={{ top: "30px" }}
      >
        <MenuItem className={classes.menuItem} onClick={this.handleMenuClose}>
          <ListItemIcon className={classes.icon}>
            <AccountIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.primary }}
            inset
            primary="Profile"
          />
        </MenuItem>
        <MenuItem className={classes.menuItem} onClick={this.handleMenuClose}>
          <ListItemIcon className={classes.icon}>
            <SettingIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.primary }}
            inset
            primary="My account"
          />
        </MenuItem>
        <MenuItem className={classes.menuItem} onClick={this.handleMenuClose}>
          <ListItemIcon className={classes.icon}>
            <HighlightOffIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.primary }}
            inset
            primary="Logout"
          />
        </MenuItem>
      </Menu>
    );

    return (
      <AppBar
        position="fixed"
        className={classNames(classes.appBar, {
          [classes.appBarShift]: openMenu
        })}
      >
        <Toolbar disableGutters={!openMenu}>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={this.handleOpen}
            className={classNames(classes.menuButton, openMenu && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            className={classes.title}
            variant="h6"
            color="inherit"
            noWrap
          >
            HOME
          </Typography>
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
            />
          </div>
          <div className={classes.sectionDesktop}>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              aria-owns={openAccount ? "material-appbar" : undefined}
              aria-haspopup="true"
              onClick={this.handleOpenMenuAcoount}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
        {renderMenu}
      </AppBar>
    );
  }
}

const mapStateToProps = state => {
  return {
    openMenu: state.global.openMenu,
    openAccount: state.global.openAccount
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setOpenMenu: show => {
      dispatch(setOpenMenu(show));
    },
    setOpenAccount: show => {
      dispatch(setOpenAccount(show));
    }
  };
};

TopBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBar);
export default withStyles(styles, { withTheme: true })(TopBar);
