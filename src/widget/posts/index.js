import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import deepOrange from "@material-ui/core/colors/deepOrange";
import deepPurple from "@material-ui/core/colors/deepPurple";
import blue from "@material-ui/core/colors/blue";
import green from "@material-ui/core/colors/green";
import grey from "@material-ui/core/colors/grey";
import red from "@material-ui/core/colors/red";
import Button from "@material-ui/core/Button";
import classNames from "classnames";
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
  commentWidget: {
    position: "relative",
    marginBottom: 10,
    touchAction: "auto"
  },
  commentRow: {
    borderBottom: "1px solid transparent",
    padding: 14,
    margin: "10px 0",
    display: "flex",
    "&:hover": {
      backgroundColor: grey[300]
    }
  },
  avatar: {
    margin: 10,
    backgroundColor: blue[200]
  },
  orangeAvatar: {
    margin: 10,
    color: "#fff",
    backgroundColor: deepOrange[500]
  },
  purpleAvatar: {
    margin: 10,
    color: "#fff",
    backgroundColor: deepPurple[500]
  },
  button: {
    margin: theme.spacing.unit
  },
  editButton: {
    color: "white",
    backgroundColor: green[300],
    "&:hover": {
      backgroundColor: green[500]
    }
  },
  publishButton: {
    color: "white",
    backgroundColor: blue[300],
    "&:hover": {
      backgroundColor: blue[500]
    }
  },
  deleteButton: {
    color: "white",
    backgroundColor: red[300],
    "&:hover": {
      backgroundColor: red[500]
    }
  }
});

class Posts extends React.Component {
  render() {
    const { classes } = this.props;
    const data = Config.widgetConf.recentPosts;
    return (
      <div className={classes.card}>
        <div className={classes.cardBody}>
          <Typography variant={"h4"} style={{ float: "left" }}>
            Recent Posts
          </Typography>
        </div>
        <div className={classes.commentWidget}>
          {data.map(item => (
            <div className={classes.commentRow}>
              <div style={{ padding: "0.5rem" }}>
                <Avatar className={classes.avatar} src={item.image}>
                  {item.avatar}
                </Avatar>
              </div>
              <div style={{ paddingLeft: 15, float: "left", width: "100%" }}>
                <Typography
                  variant={"h6"}
                  style={{ display: "block", textAlign: "left" }}
                >
                  {item.name}
                </Typography>
                <Typography style={{ display: "block", textAlign: "left" }}>
                  {item.contents}
                </Typography>
                <div>
                  <Typography style={{ float: "right", color: "#bdbdbd" }}>
                    {item.date}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classNames(classes.button, classes.editButton)}
                    style={{ float: "left", marginLeft: 0 }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="#43a047"
                    className={classNames(
                      classes.button,
                      classes.publishButton
                    )}
                    style={{ float: "left" }}
                  >
                    Publish
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classNames(classes.button, classes.deleteButton)}
                    style={{ float: "left" }}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Posts);
