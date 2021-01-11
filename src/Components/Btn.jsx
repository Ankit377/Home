import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  btn: {
    margin: "15px",
    borderRadius: "20px",
  },
}));

export default function Btn(props) {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      color="primary"
      className={classes.btn}
      onClick={props.onClick}
    >
      {props.name}
    </Button>
  );
}
