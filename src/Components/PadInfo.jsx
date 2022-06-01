import React from "react";
import usaIcon from "../images/usa-48.png";
import chinaIcon from "../images/china-48.png";
import kazakhIcon from "../images/kazakhstan-48.png";

const PadInfo = (props) => {
  const padLocation = props.pad.location.name;

  const padInfoObj = {
    "Corn Ranch, USA": usaIcon,
    "Kennedy Space Center, FL, USA": usaIcon,
    "Cape Canaveral, FL, USA": usaIcon,
    "Jiuquan, People's Republic of China": chinaIcon,
    "Baikonur Cosmodrome, Republic of Kazakhstan": kazakhIcon,
  };

  return (
    <>
      <a href={props.pad.map_url} className="padLocation">
        <div className="padInfoContainer">
          <img
            src={padInfoObj[padLocation]}
            alt="pad location icon"
            className="padInfoImg"
          />
          <p>Pad Location: {padLocation}</p>
        </div>
      </a>
    </>
  );
};

export default PadInfo;
