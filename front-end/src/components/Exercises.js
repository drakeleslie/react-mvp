import React, { useState } from "react";
import Exercise from "./Exercise";
import App from "../App.js";

const Exercises = ({ list }) => {
  return (
    <>
      <div className="lifts">
        {list.map((lift) => (
          <Exercise key={lift.id} lift={lift} />
        ))}
      </div>
    </>
  );
};

export default Exercises;
