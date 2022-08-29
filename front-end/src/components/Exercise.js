import React from "react";

const Exercise = ({ lift }) => {
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
};

export default Exercise;
