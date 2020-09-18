import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import MenuButton from "./MenuButton";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="">
        {/* hamburger menu icon */}
        {/* <MenuIcon className="d-flex flex-row m-3" /> */}
        <Link to="/aboutyourself">
          <MenuButton name="About Your Self" />
        </Link>
        <Link to="/onlinecounselling">
          <MenuButton name="Online Counselling" />
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
      </div>
    </>
  );
}
