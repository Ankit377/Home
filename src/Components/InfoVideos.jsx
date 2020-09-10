import React from "react";
import ButtonAppBar from "./ButtonAppBar";
import Btn from "./Btn";
import Iframe from "react-iframe";

// window.onload = function () {
//   // <!--Deep link URL
//   // for existing users with app already installed on their device-- >
//   window.location = "yourapp://app.com/?screen=xxxxx";
//   // !--Download URL(TUNE link) for new users to download the app-- >
//   //setTimeout(window.location = 'http://hastrk.com/serve?action=click&publisher_id=1&site_id=2', 1000);
// };
// setTimeout(function () {
//   window.location.replace("https://itunes.apple.com/app/id12345678");
// }, 2000);

export default function InfoVideos() {
  return (
    <>
      <ButtonAppBar title="InfoVideos" />

      <div>
        <div className=" " style={{ padding: "50% 0" }}>
          <a
            href="intent://https://www.youtube.com/watch?v=JcxWSyowE1Q&list=PLY3DMTGnFv2a0Sl1H5Qp0-X6Z8iurqSRT/#Intent;scheme=yourapp;package=com.yourapp.example"
            target="blank"
          >
            <Btn
              name="Germany Info Videos"
              onClick={
                () =>
                  (window.location.replace =
                    "yourapp://https://www.youtube.com/watch?v=JcxWSyowE1Q&list=PLY3DMTGnFv2a0Sl1H5Qp0-X6Z8iurqSRT")
                //  (window.location.replace = "yourapp://app.com/?screen=xxxxx")
              }
            />
          </a>
          <a
            href="https://www.youtube.com/watch?v=JcxWSyowE1Q&list=PLY3DMTGnFv2a0Sl1H5Qp0-X6Z8iurqSRT"
            target="blank"
          >
            <Btn name="Germany Info Videos" />
          </a>
          <Iframe
            url="https://www.youtube.com/watch?v=JcxWSyowE1Q&list=PLY3DMTGnFv2a0Sl1H5Qp0-X6Z8iurqSRT"
            id="myId"
            className="myClassname"
            position="relative"
          >
            <Btn name="Russia" />
          </Iframe>

          <a
            href="intent://scan/#Intent;scheme=zxing;package=com.google.android.youtube.player
;end"
          >
            <Btn name="intent" />
          </a>
        </div>
      </div>
    </>
  );
}
