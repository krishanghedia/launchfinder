import React from "react";

const LaunchStatus = (props) => {
  const changeColour =
    props.status.name === "To Be Determined" ||
    props.status.name === "To Be Confirmed"
      ? "#ff7700"
      : "rgb(20 165 37)";

  return (
    <div className="currentStatusContainer">
      <h4 className="currentStatus" style={{ backgroundColor: changeColour }}>
        Status: {props.status.name}
      </h4>
    </div>
  );
};

export default LaunchStatus;
