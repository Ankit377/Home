import React from "react";
import Input from "./Input";
import Btn from "./Btn";
import ButtonAppBar from "./ButtonAppBar";

const btn = {
  margin: "20px",
};
const maindiv = {
  position: "relative",
  top: "30vh",
};
export default function SignIn() {
  const handleSubmit = (event) => {
    // event.preventDefault();
  };
  return (
    <>
      <ButtonAppBar title="User info" />

      {/* design for user details */}
      <div style={maindiv}>
        <form onSubmit={handleSubmit}>
          <input
            pattern="[0-9]"
            type="number"
            name="mobile_number"
            placeholder="Enter Mobile Number"
            required
          />
          <input type="text" placeholder="Enter Name" required />
          <input type="email" placeholder="Enter email address" required />
          {/* <div style={btn}>
            <Btn name="Next"></Btn>
          </div> */}
          <input type="submit" />
        </form>
      </div>
    </>
  );
}
