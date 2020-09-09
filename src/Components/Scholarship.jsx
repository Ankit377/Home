import React from "react";
import ButtonAppBar from "./ButtonAppBar";
import MenuButton from "./MenuButton";
import { Link } from "react-router-dom";

export default function Scholarship() {
  return (
    <>
      <ButtonAppBar title="Scholarship" />

      <Link to="/germany">
        <MenuButton name="Germany" />
      </Link>
    </>
  );
}
