import React from "react";
import Iframe from "react-iframe";
import ButtonAppBar from "./ButtonAppBar";

export default function ExternalLink(props) {
  return (
    <>
      <ButtonAppBar title="Scholarship" />
      <Iframe
        url={props.url}
        width="100%"
        height="1000px"
        id="myId"
        className="myClassname"
        position="relative"
      />
    </>
  );
}
