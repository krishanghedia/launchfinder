import React from "react";

const PadInfo = (props) => {
  const padLocation = props.pad.location.name;
  return (
    <>
      <p>Launch Pad Location: {padLocation}</p>
    </>
  );
};

export default PadInfo;
