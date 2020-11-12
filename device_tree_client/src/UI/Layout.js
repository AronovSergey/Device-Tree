import React from "react";

//MUI Stuff
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
}));

const Layout = (props) => {
  const classes = useStyles();

  return (
    <Grid item container direction="column" spacing={3} height={1024}>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography className={classes.title} variant="h4" noWrap style={{ paddingTop : 8, paddingLeft: 20 }}>
              Device Tree
            </Typography>
          </Toolbar>
        </AppBar>
      </div>

      <Grid item xs={2} sm={3} />
      <Grid item container >
        <Grid item xs={false} sm={1} />
        <Grid item xs={12} sm={10}>
          {props.children}
        </Grid>
        <Grid item xs={false} sm={1} />
      </Grid>
    </Grid>
  );
};

export default Layout;
