import React from "react";
import ButtonAppBar from "./ButtonAppBar";
import Btn from "./Btn";

export default function InfoVideos() {
  return (
    <>
      <ButtonAppBar title="InfoVideos" />
      <div>
        <a
          href="https://www.youtube.com/watch?v=JcxWSyowE1Q&list=PLY3DMTGnFv2a0Sl1H5Qp0-X6Z8iurqSRT"
          target="blank"
        >
          <Btn name="Germany Info Videos" />
        </a>
      </div>
    </>
  );
}
