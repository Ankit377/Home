import React from "react";
import Btn from "./Btn";

export default function PriceBox(props) {
  return (
    <>
      <h5 className="text-primary m-4">{props.title}</h5>
      <p className="text-primary">Fee - {props.price}</p>

      {/* now button component is used as a sepereate component not included in priceBox

       <Btn name="pay" />
      <hr /> */}
    </>
  );
}
