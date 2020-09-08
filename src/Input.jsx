import React from "react";

const input = {
  boxShadow: "1px 1px 1px #E3E3E3",
  borderRadius: "8px",
  border: " 1px solid #E3E3E3",
};

export default function Input(props) {
  return (
    <>
      <input style={input} type={props.type} placeholder={props.placeholder} />
    </>
  );
}
