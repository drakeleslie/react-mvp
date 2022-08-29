import React, { useState } from "react";
import Exercise from "./Exercise";
import App from "../App.js";

const Exercises = ({ list, currentUser }) => {
  return (
    <>
      <div className="lifts">
        {list.map((lift) => (
          <Exercise key={lift.id} lift={lift} currentUser={currentUser} />
        ))}
      </div>
    </>
  );
};

export default Exercises;
