import React from "react";
import { useState } from "react";
import DateofLaunch from "./DateofLaunch";
import LaunchStatus from "./LaunchStatus";
import MissionImage from "./MissionImage";
import OrbitType from "./OrbitType";
import PadInfo from "./PadInfo";
import Timer from "./Timer";
import usaIcon from "../images/usa-48.png";
import chinaIcon from "../images/china-48.png";
import kazakhIcon from "../images/kazakhstan-48.png";

const LaunchContent = (props) => {
  const [readMore, setReadMore] = useState(true);
  const { id, image, mission, status, pad, net, window_start } = props.launch;
  console.log(pad);
  const padInfoObj = {
    "Corn Ranch, USA": usaIcon,
    "Kennedy Space Center, FL, USA": usaIcon,
    "Cape Canaveral, FL, USA": usaIcon,
    "Jiuquan, People's Republic of China": chinaIcon,
    "Baikonur Cosmodrome, Republic of Kazakhstan": kazakhIcon,
  };

  const launchDescription = mission && mission.description;

  const toggleReadMore = () => {
    setReadMore(!readMore);
  };

  if (mission === null) {
    return (
      <div>
        <p>Mission information not available</p>
      </div>
    );
  }

  return (
    <>
      <div className="missionInfoContainer">
        <div>
          <MissionImage id={id} image={image} />
          <div className="launchContentContainer">
            <div className="launchContentHeadline">
              <img
                src={padInfoObj[pad.location.name]}
                alt="pad location icon"
                className="launchInfoImg"
              ></img>
              <h3>{props.launch.name}</h3>
            </div>

            <p className="missionInfoText">
              {readMore ? launchDescription.slice(0, 40) : launchDescription}
              <span onClick={toggleReadMore} className="read-or-hide">
                {readMore ? "...read more" : " show less"}
              </span>
            </p>
            <LaunchStatus status={status} />
            <PadInfo pad={pad} />
            <OrbitType orbit={mission.orbit} />
            <DateofLaunch dateOfLaunch={net} />
            <Timer timer={window_start} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LaunchContent;
