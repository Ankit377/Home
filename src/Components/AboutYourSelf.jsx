import React from "react";
import ButtonAppBar from "./ButtonAppBar";
import { useForm } from "react-hook-form";
import "./aboutyourself.css";
import Btn from "./Btn";

export default function AboutYourSelf() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <ButtonAppBar title="About Your Self" />
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">Full Name*</label>
        <input
          type="text"
          name="Full Name"
          ref={register({
            required: true,
          })}
          placeholder="Enter Full Name"
        />
        <label htmlFor="">DOB*</label>
        <input
          type="date"
          placeholder="Enter Date Of Birth"
          name="Enter Date Of Birth"
          ref={register({ required: true })}
        />
        <label htmlFor="">10th Percentage*</label>
        <input
          type="number"
          placeholder="Enter 10th Percentage"
          name="Enter 10th Percentage"
          ref={register({ required: true })}
        />
        <label htmlFor="">12th Percentage*</label>
        <input
          type="number"
          placeholder="Enter 12th Percentage"
          name="Enter 12th Percentage"
          ref={register({ required: true })}
        />
        <label htmlFor="">Undergraduate Percentage</label>
        <input
          type="number"
          placeholder="Enter Undergraduate Percentage"
          name="Undergraduate Percentage"
          ref={register}
        />
        <label htmlFor="">Highest Qualification</label>
        <input
          type="text"
          placeholder="Enter Highest Qualification "
          name="Enter Highest Qualification "
          ref={register}
        />
        <hr />
        <p>What are you looking for ?</p>
        <label htmlFor="russiacheckbox">
          Scholarship in Russia
          <input
            type="checkbox"
            placeholder="Scholarship in Russia"
            name="Scholarship in Russia"
            id="russiacheckbox"
            ref={register({ min: 1 })}
          />
        </label>
        <label htmlFor="">
          Scholarship in Germany
          <input
            type="checkbox"
            placeholder="Scholarship in Germany "
            name="Scholarship in Germany "
            ref={register}
          />
        </label>
        <label htmlFor="">
          scholarship in Italy
          <input
            type="checkbox"
            placeholder="Scholarship in Italy"
            name="Scholarship in Italy"
            ref={register}
          />
        </label>
        <label htmlFor="">
          All of the above
          <input
            type="checkbox"
            placeholder="All of the above"
            name="All of the above"
            ref={register}
          />
        </label>
        <hr />
        <p>Which course are you intent to study ?</p>
        <label htmlFor="">
          Engineering
          <input
            type="checkbox"
            placeholder="Engineering"
            name="Engineering"
            ref={register}
          />
        </label>
        <label htmlFor="">
          Medical
          <input
            type="checkbox"
            placeholder="Medical"
            name="Medical"
            ref={register}
          />
        </label>
        <label htmlFor="">
          Commerce
          <input
            type="checkbox"
            placeholder="Commerce"
            name="Commerce"
            ref={register}
          />
        </label>
        <label htmlFor="">
          Management
          <input
            type="checkbox"
            placeholder="Management"
            name="Management"
            ref={register}
          />
        </label>
        <label htmlFor="">
          Humanities
          <input
            type="checkbox"
            placeholder="Humanities"
            name="Humanities"
            ref={register}
          />
        </label>
        <label htmlFor="">
          Others Course
          <input
            type="text"
            placeholder="Write course here"
            name="Others"
            ref={register}
          />
        </label>
        <hr />

        <label htmlFor="">Pincode</label>
        <input
          type="tel"
          placeholder="Enter Your Pincode"
          name="Enter Your Pincode"
          ref={register({ required: true })}
        />
        <hr />
        <p>Upload your originally scanned documents</p>
        <label htmlFor="">10th</label>
        <input type="file" placeholder="10th" name="10th" ref={register} />
        <label htmlFor="">12th</label>
        <input type="file" placeholder="12th" name="12th" ref={register} />
        <label htmlFor="">Undergraduate Mark Sheet</label>
        <input
          type="file"
          placeholder="Undergraduate Mark Sheet"
          name="Undergraduate Mark Sheets"
          ref={register}
        />
        <label htmlFor="">GRE Score Card</label>
        <input
          type="file"
          placeholder="GRE Score Card"
          name="GRE Score Card"
          ref={register}
        />
        <label htmlFor="">GMAT Score Card</label>
        <input
          type="file"
          placeholder="GMAT Score Card"
          name="GMAT Score Card"
          ref={register}
        />
        <label htmlFor="">IELTS</label>
        <input type="file" placeholder="IELTS" name="IELTS" ref={register} />
        <label htmlFor="">Any Other Relevant Document</label>

        <input
          type="file"
          placeholder="Any Other Relevant Document"
          name="Any Other Relevant Document"
          ref={register}
        />

        <input type="submit" />
      </form>
    </>
  );
}
