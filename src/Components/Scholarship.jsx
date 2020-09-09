import React from "react";
import ButtonAppBar from "./ButtonAppBar";
import MenuButton from "./MenuButton";
import { Link } from "react-router-dom";

export default function Scholarship() {
  return (
    <>
      <ButtonAppBar title="Scholarship" />

      <Link to="/germanyscholarship">
        <MenuButton name="Germany" />
      </Link>
      <Link to="/italyscholarship">
        <MenuButton name="Italy" />
      </Link>
      <Link to="/canadascholarship">
        <MenuButton name="Canada" />
      </Link>
      <Link to="/russiascholarship">
        <MenuButton name="Russia" />
      </Link>
    </>
  );
}
