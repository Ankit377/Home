import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    padding: "10px",
  },
  btn: {
    background: "white",
    color: "#747070",
    textShadow: "3px 2px 7px #5A4343 ",
    boxShadow: "3px 3px 20px #0000000",
    margin: "15px",
    width: "80%",
    height: "8vh",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function MenuButton(props) {
  const classes = useStyles();

  return (
    <Button variant="contained" className={classes.btn}>
      {props.name}
    </Button>
  );
}
