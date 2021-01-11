import React from "react";
import PriceBox from "./PriceBox";
import ButtonAppBar from "./ButtonAppBar";
import WhatsAppChat from "./WhatsAppChat";

export default function PaidCounselling() {
  return (
    <>
      <ButtonAppBar title="Online Counselling" />
      <PriceBox title="One Hour - One Month" price="1000rs" />
      <WhatsAppChat
        btnName="Chat with Expert"
        msg="I am interested in taking one month counselling package. let me know for more information "
      />
      <PriceBox title="Two Hour - Two Month" price="2000rs" />
      <WhatsAppChat
        btnName="Chat with Expert"
        msg="I am interested in taking one month counselling package. let me know for more information "
      />

      <PriceBox title="Three Hour - Three Month" price="3000rs" />
      <WhatsAppChat
        btnName="Chat with Expert"
        msg="I am interested in taking one month counselling package. let me know for more information "
      />
    </>
  );
}
