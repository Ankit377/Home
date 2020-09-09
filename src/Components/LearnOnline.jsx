import React from "react";
import ButtonAppBar from "./ButtonAppBar";
import PriceBox from "./PriceBox";

export default function LearnOnline() {
  return (
    <>
      <ButtonAppBar title="Learn Online" />
      <PriceBox title="Learn German" price="3000-/" />
      <PriceBox title="English" price="4000-/" />
      <PriceBox title="GRE" price="5000-/" />
      <PriceBox title="GMAT" price="6000-/" />
      <PriceBox title="ILETS" price="7000-/" />
    </>
  );
}
