import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import IconButton from "@material-ui/core/IconButton";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import ShareIcon from "@material-ui/icons/Share";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  //   Toolbar: {
  //     backgroundColor: "transperent",
  //     color: "#000",
  //   },
  backButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();

  //  share is not working on android so commented this code  const shareOpts = {
  //   title: "Scholarship Acedemy",
  //   text: "Get 100% Scholarship across Europe",
  //   url: "https://ankit377.github.io/schloarshipacedemy/",
  // };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.Toolbar}>
          <IconButton
            edge="start"
            className={classes.backButton}
            color="inherit"
            aria-label="menu"
            onClick={() => window.history.back()}
          >
            <KeyboardBackspaceIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {props.title}
          </Typography>

          {/* share button code 
           <IconButton
            edge="start"
            className={classes.backButton}
            color="inherit"
            aria-label="menu"
            onClick={() => navigator.share(shareOpts)}
          >
            <ShareIcon />
          </IconButton> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
