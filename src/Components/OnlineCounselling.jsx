import React from "react";
import ButtonAppBar from "./ButtonAppBar";
import MenuButton from "./MenuButton";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    paddingTop: "50vh",
  },
  btn: {
    background: "black",
    color: "#747070",
    textShadow: "3px 2px 7px #5A4343 ",
    boxShadow: "3px 3px 20px #0000000",
    margin: "15px",
  },
}));

export default function OnlineCounselling() {
  const classes = useStyles();
  return (
    <>
      <ButtonAppBar title="Online Counselling" />
      <div className={classes.root}>
        <MenuButton name="Free" />
        <Link to="/paidcounselling">
          <MenuButton name="Paid" />
        </Link>
      </div>
    </>
  );
}
