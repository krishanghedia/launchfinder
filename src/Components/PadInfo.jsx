import React from "react";

const PadInfo = (props) => {
  const padLocation = props.pad.location.name;
  return (
    <>
      <a href={props.pad.map_url} className="padLocation">
        <div className="padInfoContainer">
          <p>Pad Location: {padLocation}</p>
        </div>
      </a>
    </>
  );
};

export default PadInfo;
