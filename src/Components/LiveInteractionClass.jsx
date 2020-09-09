import React from "react";
import ButtonAppBar from "./ButtonAppBar";
import PriceBox from "./PriceBox";

export default function LiveInteractionClass() {
  return (
    <>
      <ButtonAppBar title="Live Interaction Class" />
      <PriceBox title="Live German Classes" price="13000-/" />
      <PriceBox title="Live English Classes" price="14000-/" />
      <PriceBox title="Live GRE Classes" price="15000-/" />
      <PriceBox title="Live GMAT Classes" price="16000-/" />
      <PriceBox title="Live ILETS Classes" price="17000-/" />
    </>
  );
}
