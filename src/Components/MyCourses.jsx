import React from "react";
import ButtonAppBar from "./ButtonAppBar";
import CourseCard from "./CourseCard";
import Btn from "./Btn";
import { Link } from "react-router-dom";
import fing from "../images/finprt.jpeg";
export default function MyCourses() {
  return (
    <>
      <ButtonAppBar title="My Courses" />
      <CourseCard
        img={fing}
        title="Basic German Course"
        description="From zero to able to speak, write and do basic communication you can learn from this course. design in a way that you can practice after each lesson"
      />
      <Link to="/englishcourse">
        <Btn name="Start" />
      </Link>
      <CourseCard
        img={fing}
        title="IELTS"
        description="From zero to able to speak, write and do basic communication you can learn from this course. design in a way that you can practice after each lesson"
      />
      <Link to="/englishcourse">
        <Btn name="Start" />
      </Link>
      <CourseCard
        img={fing}
        title="GMAT"
        description="From zero to able to speak, write and do basic communication you can learn from this course. design in a way that you can practice after each lesson"
      />
      <Link to="/englishcourse">
        <Btn name="Start" />
      </Link>
    </>
  );
}
