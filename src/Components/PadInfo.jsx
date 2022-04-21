import React from "react";

const PadInfo = (props) => {
  console.log(props);
  const padLocation = props.pad.location.name;
  return (
    <>
      <a href={props.pad.map_url} className="padLocation">
        <p>Pad Location: {padLocation}</p>
      </a>
    </>
  );
};

export default PadInfo;
