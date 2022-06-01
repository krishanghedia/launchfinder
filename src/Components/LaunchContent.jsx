import React from "react";
import { useState } from "react";
import DateofLaunch from "./DateofLaunch";
import LaunchStatus from "./LaunchStatus";
import MissionImage from "./MissionImage";
import OrbitType from "./OrbitType";
import PadInfo from "./PadInfo";
import Timer from "./Timer";

const LaunchContent = (props) => {
  const [readMore, setReadMore] = useState(true);
  const { id, image, mission, status, pad, net, window_start } = props.launch;

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
            <h3>{props.launch.name}</h3>
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
