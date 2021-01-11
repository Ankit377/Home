import React from "react";
import ButtonAppBar from "./ButtonAppBar";
import PriceBox from "./PriceBox";
import WhatsAppChat from "./WhatsAppChat";

export default function LiveInteractionClass() {
  return (
    <>
      <ButtonAppBar title="Live Interaction Class" />
      <PriceBox title="Live German Classes" price="13000-/" />
      <WhatsAppChat
        btnName="Join Live Classes"
        msg="Hello, I would like to join German Live class"
      />
      <PriceBox title="Live English Classes" price="14000-/" />
      <WhatsAppChat
        btnName="Join Live Classes"
        msg="Hello, I would like to join English Live class"
      />

      <PriceBox title="Live GRE Classes" price="15000-/" />
      <WhatsAppChat
        btnName="Join Live Classes"
        msg="Hello, I would like to join GRE Live class"
      />

      <PriceBox title="Live GMAT Classes" price="16000-/" />
      <WhatsAppChat
        btnName="Join Live Classes"
        msg="Hello, I would like to join GMAT Live class"
      />

      <PriceBox title="Live ILETS Classes" price="17000-/" />
      <WhatsAppChat
        btnName="Join Live Classes"
        msg="Hello, I would like to join ILETS Live class"
      />
    </>
  );
}
