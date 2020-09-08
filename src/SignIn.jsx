import React from "react";
import Input from "./Input";
import Btn from "./Components/Btn";

const btn = {
  margin: "20px",
};
const maindiv = {
  position: "relative",
  top: "30vh",
};
export default function SignIn() {
  return (
    <>
      <div style={maindiv}>
        <Input
          pattern="[0-9]"
          type="number"
          placeholder="Enter Mobile Number"
        />
        <div style={btn}>
          <Btn name="Sign In">Sign In</Btn>
        </div>
      </div>
    </>
  );
}
