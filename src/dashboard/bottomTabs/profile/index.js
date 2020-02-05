import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
import pink from "@material-ui/core/colors/pink";
import purple from "@material-ui/core/colors/purple";
import deepPurple from "@material-ui/core/colors/deepPurple";
import indigo from "@material-ui/core/colors/indigo";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TvIcon from "@material-ui/icons/Tv";
import MallIcon from "@material-ui/icons/LocalMall";
import AppIcon from "@material-ui/icons/Apps";
import SecurityIcon from "@material-ui/icons/Security";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import Config from "../../../config/config.js";

const styles = theme => ({
  card: {
    display: "block"
  },
  header: {
    textAlign: "left"
  },
  details: {
    display: "flex",
    flexDirection: "row"
  },
  content: {
    flex: "1 0 auto",
    backgroundColor: "blue",
    color: "white"
  },
  avatar: {
    backgroundColor: blue[200]
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  list: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  chip: {
    margin: theme.spacing.unit / 2
  }
});

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: Config.dashboardConf.profileConf,
      details: ""
    };
  }

  componentDidMount() {
    this.showDetails(this.state.list[0]);
  }

  checkColor(color) {
    switch (color) {
      case "red":
        return { backgroundColor: red[500] };
      case "blue":
        return { backgroundColor: blue[500] };
      case "pink":
        return { backgroundColor: pink[500] };
      case "purple":
        return { backgroundColor: purple[500] };
      case "deepPurple":
        return { backgroundColor: deepPurple[500] };
      case "indigo":
        return { backgroundColor: indigo[500] };
      default:
        return "";
    }
  }

  checkIcons(icon) {
    switch (icon) {
      case "TV":
        return <TvIcon />;
      case "Mall":
        return <MallIcon />;
      case "App":
        return <AppIcon />;
      case "Security":
        return <SecurityIcon />;
      default:
        return "";
    }
  }

  showDetails(item) {
    const { classes } = this.props;
    const imageCheck = item => {
      if (item.image === undefined)
        return <Typography variant="h4">{item.company}</Typography>;
      else return <img style={{ float: "left" }} src={item.image} />;
    };
    const res = (
      <CardContent>
        <Paper className={classes.paper} elevation={1}>
          <p style={{ display: "flex" }}>{imageCheck(item)}</p>
          <Typography
            component="p"
            variant="h5"
            style={{
              textAlign: "right",
              paddingBottom: 10,
              paddingTop: 10
            }}
          >
            {item.position}
          </Typography>
          <Divider />
          <Typography style={{ textAlign: "left", padding: 10 }}>
            Role: {item.role}
          </Typography>
          <Divider />
          <div style={{ textAlign: "left", padding: 10 }}>
            Tech Stack:
            {item.tech.map(stack => (
              <Chip label={stack} className={classes.chip} onDelete />
            ))}
          </div>
        </Paper>
      </CardContent>
    );

    this.setState({
      details: res
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="kainel" className={classes.avatar}>
              K
            </Avatar>
          }
          title="Junho Lee's Profile"
          className={classes.header}
        />
        <Divider />
        <div className={classes.details}>
          <CardContent>
            <List className={classes.list}>
              {this.state.list.map(item => (
                <ListItem button onClick={this.showDetails.bind(this, item)}>
                  <Avatar style={this.checkColor(item.color)}>
                    {this.checkIcons(item.icon)}
                  </Avatar>
                  <ListItemText
                    primary={item.company}
                    secondary={item.period}
                  />
                </ListItem>
              ))}
            </List>
          </CardContent>
          {this.state.details}
        </div>
      </Card>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Profile);
