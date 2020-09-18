import React from "react";
import ButtonAppBar from "./ButtonAppBar";
import MenuButton from "./MenuButton";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import ReactWhatsapp from 'react-whatsapp';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    paddingTop: "50%",
  },
  reactwhatsapp: {
    border: "none", backgroundColor: "white", width: "100%", padding: "0 0px"
  },
}));

export default function OnlineCounselling() {


  const classes = useStyles();
  return (
    <>
      <ButtonAppBar title="Online Counselling" />
      <div className={classes.root}>
        <ReactWhatsapp className={classes.reactwhatsapp} number="+918947885580" message="Welcome to Scholarship Academy" > <MenuButton name="Free" /> </ReactWhatsapp>


        <Link to="/paidcounselling">
          <MenuButton name="Paid" />
        </Link>
      </div>
    </>
  );
}
