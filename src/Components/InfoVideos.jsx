import React from "react";
import ButtonAppBar from "./ButtonAppBar";
import Btn from "./Btn";
window.onload = function () {
  // <!--Deep link URL
  // for existing users with app already installed on their device-- >
  window.location = "youtube.co";
  // !--Download URL(TUNE link) for new users to download the app-- >
  //setTimeout(window.location = 'http://hastrk.com/serve?action=click&publisher_id=1&site_id=2', 1000);
};

export default function InfoVideos() {
  return (
    <>
      <ButtonAppBar title="InfoVideos" />

      <div>
        <div className=" " style={{ padding: "50% 0" }}>
          <a
            href="https://www.youtube.com/watch?v=JcxWSyowE1Q&list=PLY3DMTGnFv2a0Sl1H5Qp0-X6Z8iurqSRT"
            target="blank"
          >
            window.onload = function ()
            {
              // <!--Deep link URL
              // for existing users with app already installed on their device-- >
              (window.location =
                "https://play.google.com/store/apps/details?id=com.google.android.youtube")
              // !--Download URL(TUNE link) for new users to download the app-- >
              //setTimeout(window.location = 'http://hastrk.com/serve?action=click&publisher_id=1&site_id=2', 1000);
            }
            ;
            <Btn name="Germany Info Videos" />
          </a>
          <a
            href="https://www.youtube.com/watch?v=JcxWSyowE1Q&list=PLY3DMTGnFv2a0Sl1H5Qp0-X6Z8iurqSRT"
            target="blank"
          >
            <Btn name="Germany Info Videos" />
          </a>
        </div>
      </div>
    </>
  );
}
