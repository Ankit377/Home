import React from "react";
import ButtonAppBar from "./ButtonAppBar";
import Input from "./Input";
import Btn from "./Btn";
import { useForm } from "react-hook-form";
export default function EnterNumber() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  //console.log(errors);
  return (
    <>
      <ButtonAppBar title="Enter OTP" />
      <div
        className="enterNumber"
        style={{ marginTop: "50%", marginLeft: "1rem" }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="number"
            placeholder="Enter OTP"
            name="otp"
            ref={register({ required: true })}
          />

          <input type="submit" />
        </form>
      </div>
    </>
  );
}
