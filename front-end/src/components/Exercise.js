import React, { useState, useEffect } from "react";

const Exercise = ({ lift, currentUser }) => {
  const [reps, setReps] = useState("");
  const [sets, setSets] = useState("");
  const [info, setInfo] = useState("");
  const [logID, setLogID] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const currentLiftName = lift.name;
    const currentName = currentUser.name;
    const newLift = {
      username: { currentName },
      name: { currentLiftName },
      sets: { sets },
      reps: { reps },
      info: { info },
      logid: { logID },
    };
    fetch(`http://localhost:8000/fj/${currentName}/${logID}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newLift),
    });
  };

  if (!currentUser) {
    return (
      <div className="boxName">
        <div className="liftName">{lift.name}</div>
        <div className="primeMovers">Primary Muscle: {lift.prime_movers}</div>
        <div className="secondariesMovers">
          Secondary Muscles: {lift.secondaries}
        </div>
        <div className="video">
          <a href={lift.video} target="_blank">
            More information / How-To
          </a>
        </div>
      </div>
    );
  } else if (currentUser) {
    return (
      <div className="boxName">
        <div className="liftName">{lift.name}</div>
        <div className="primeMovers">Primary Muscle: {lift.prime_movers}</div>
        <div className="secondariesMovers">
          Secondary Muscles: {lift.secondaries}
        </div>
        <div className="video">
          <a href={lift.video} target="_blank">
            More information / How-To
          </a>
        </div>
        <form onSubmit={handleSubmit} className="liftForm">
          <input
            type="text"
            value={sets}
            onChange={(e) => setSets(e.target.value)}
            className="input-1"
            placeholder="Sets"
          ></input>
          <input
            type="text"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
            className="input-1"
            placeholder="Reps"
          ></input>
          <input
            type="text"
            value={info}
            onChange={(e) => setInfo(e.target.value)}
            className="input-1"
            placeholder="Comments"
          ></input>
          <input
            type="text"
            value={logID}
            onChange={(e) => setLogID(e.target.value)}
            className="input-1"
            placeholder="Journal Entry"
          ></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
};

export default Exercise;
