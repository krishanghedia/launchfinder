import React from "react";

const OrbitType = (props) => {
  if (props.orbit === null) {
    return (
      <div>
        <p>Orbit information unavailable</p>
      </div>
    );
  }

  return (
    <>
      <p>Orbit Type: {props.orbit.name}</p>
    </>
  );
};

export default OrbitType;
