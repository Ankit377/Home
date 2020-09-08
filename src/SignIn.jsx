import React from "react";
import Input from "./Input";
import Button from "@material-ui/core/Button";

export default function SignIn() {
  return (
    <>
      <Input pattern="[0-9]" type="number" placeholder="Enter Mobile Number" />
      <Button>Sign In</Button>
    </>
  );
}
