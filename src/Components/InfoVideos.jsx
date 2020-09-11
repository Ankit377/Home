import React from "react";
import ButtonAppBar from "./ButtonAppBar";
import Btn from "./Btn";

export default function InfoVideos() {
  function redirect() {
    window.location.replace(
      "yourapp://https://www.youtube.com/watch?v=whG84Y5EYaQ/"
    );
    setTimeout(function () {
      window.location.replace(
        "https://play.google.com/store/apps/details?id=com.google.android.youtube"
      );
    }, 2000);
  }
  return (
    <>
      <ButtonAppBar title="InfoVideos" />

      <div>
        <div className=" " style={{ padding: "50% 0" }}>
          <a
            href="https://www.youtube.com/watch?v=JcxWSyowE1Q&list=PLY3DMTGnFv2a0Sl1H5Qp0-X6Z8iurqSRT"
            target="blank"
          >
            <Btn name="Germany Info Videos" />
          </a>

          <a href="https://www.youtube.com/watch?v=JcxWSyowE1Q&list=PLY3DMTGnFv2a0Sl1H5Qp0-X6Z8iurqSRT/#Intent;scheme=yourapp;package=com.yourapp.example">
            <Btn name="Italy Info Videos" />
          </a>
          <a href="https://www.youtube.com/watch?v=JcxWSyowE1Q&list=PLY3DMTGnFv2a0Sl1H5Qp0-X6Z8iurqSRT/#Intent;scheme=yourapp;package=com.yourapp.example">
            <Btn name="Canada Info Videos" />
          </a>
          <a href="https://www.youtube.com/watch?v=JcxWSyowE1Q&list=PLY3DMTGnFv2a0Sl1H5Qp0-X6Z8iurqSRT/#Intent;scheme=yourapp;package=com.yourapp.example">
            <Btn name="Russia Info Videos" />
          </a>
          {/* <a href="intent://www.youtube.com/watch?v=JcxWSyowE1Q#Intent;package=com.google.android.youtube;scheme=https;end">
            <Btn name="intent" />
          </a> */}
          <a href="yourapp://https://www.youtube.com/watch?v=JcxWSyowE1Q&list=PLY3DMTGnFv2a0Sl1H5Qp0-X6Z8iurqSRT/#Intent;scheme=yourapp;package=com.yourapp.example">
            <Btn name="india Info Videos" />
          </a>
          <Btn name="revolution" onClick={redirect} />
          <button onClick={redirect}>default revolution button</button>
        </div>
      </div>
    </>
  );
}
