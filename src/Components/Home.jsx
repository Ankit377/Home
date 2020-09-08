import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import MenuButton from "./MenuButton";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  menuicon: {
    paddingRight: "18rem",
  },
}));
export default function Home() {
  const classes = useStyles();
  return (
    <>
      <MenuIcon className={classes.menuicon} />
      <Link to="/aboutyourself">
        <MenuButton name="About Your Self" className={classes.about} />
      </Link>
      <Link to="/onlinecounselling">
        <MenuButton name="Online Counselling" className={classes.counselling} />
      </Link>

      <Link to="/scholarship">
        <MenuButton name="Scholarship" />
      </Link>
      <Link to="/learnonline">
        <MenuButton name="Learn Online" />
      </Link>
      <Link to="/infovideos">
        <MenuButton name="Info Videos" />
      </Link>
      <Link to="/mycourses">
        <MenuButton name="My Courses" />
      </Link>
      <Link to="/liveinteractionclass">
        <MenuButton name="Live Interaction Class" />
      </Link>
    </>
  );
}
