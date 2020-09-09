import React from "react";
import PriceBox from "./PriceBox";
import ButtonAppBar from "./ButtonAppBar";

export default function PaidCounselling() {
  return (
    <>
      <ButtonAppBar title="Online Counselling" />
      <PriceBox title="One Hour - One Month" price="1000rs" />
      <PriceBox title="Two Hour - Two Month" price="2000rs" />
      <PriceBox title="Three Hour - Three Month" price="3000rs" />
    </>
  );
}
