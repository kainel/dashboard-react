import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Config from "../config/config.js";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  }
});

function CenteredGrid(props) {
  const { classes } = props;
  const data = Config.widthConf;
  return (
    <div>
      <div className={classes.drawerHeader} />
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography
                variant="h6"
                align="left"
                style={{ paddingBottom: 10 }}
              >
                Full Width
              </Typography>
              <Typography>{data.contents}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Typography
                variant="h6"
                align="left"
                style={{ paddingBottom: 10 }}
              >
                Half Width
              </Typography>
              <Typography>{data.contents}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Typography
                variant="h6"
                align="left"
                style={{ paddingBottom: 10 }}
              >
                Half Width
              </Typography>
              <Typography>{data.contents}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <Typography
                variant="h6"
                align="left"
                style={{ paddingBottom: 10 }}
              >
                One thrid Width
              </Typography>
              <Typography>{data.contents}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <Typography
                variant="h6"
                align="left"
                style={{ paddingBottom: 10 }}
              >
                One third Width
              </Typography>
              <Typography>{data.contents}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <Typography
                variant="h6"
                align="left"
                style={{ paddingBottom: 10 }}
              >
                One third Width
              </Typography>
              <Typography>{data.contents}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <Paper className={classes.paper}>
              <Typography
                variant="h6"
                align="left"
                style={{ paddingBottom: 10 }}
              >
                Two third Width
              </Typography>
              <Typography>{data.contents}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <Typography
                variant="h6"
                align="left"
                style={{ paddingBottom: 10 }}
              >
                One third Width
              </Typography>
              <Typography>{data.contents}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <Typography
                variant="h6"
                align="left"
                style={{ paddingBottom: 10 }}
              >
                One fourth Width
              </Typography>
              <Typography>{data.contents}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <Typography
                variant="h6"
                align="left"
                style={{ paddingBottom: 10 }}
              >
                One fourth Width
              </Typography>
              <Typography>{data.contents}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <Typography
                variant="h6"
                align="left"
                style={{ paddingBottom: 10 }}
              >
                One fourth Width
              </Typography>
              <Typography>{data.contents}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <Typography
                variant="h6"
                align="left"
                style={{ paddingBottom: 10 }}
              >
                One fourth Width
              </Typography>
              <Typography>{data.contents}</Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CenteredGrid);
