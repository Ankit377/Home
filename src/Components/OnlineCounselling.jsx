import React from "react";
import ButtonAppBar from "./ButtonAppBar";
import MenuButton from "./MenuButton";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    paddingTop: "50%",
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
