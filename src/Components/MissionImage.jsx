import React from "react";

import newShephard from "../images/new_shephard_web.jpg";
import falcon9Axiom from "../images/falcoln-9-axiom.jpg";
import falcon9CrewFour from "../images/falcoln-9-crew-4.jpg";
import soyuz from "../images/soyuz-2.1a-edited.jpg";
import falcon9CrewFive from "../images/falcoln-9-crew-5.jpg";
import falcon9Polaris from "../images/falcoln-9-polaris-edited.jpg";
import atlasVn22 from "../images/atlas_v_n22_image-edited.jpg";
import atlasVn22Launch from "../images/atlas_v_n22_launch.jpg";
import falcon9CrewSix from "../images/falcoln-9-crew-6.jpg";
import falcon9Rocket from "../images/Falcon_9_Rocket.jpg";
import falcon9crew52023 from "../images/falcoln-9-crew-5-2023.jpg";
import newShephardNs21 from "../images/ns21.jpg";

const imageObj = {
  "08040943-ec97-413d-b134-22e516e50528": newShephard,
  "a3eeb03b-a209-4255-91b5-772dc0d2150e": falcon9Axiom,
  "d786d8fc-862b-45bf-8f7b-9ad862883f67": falcon9CrewFour,
  "bc73ec4f-633e-4eb5-8b8e-5c996ea1733f": soyuz,
  "f33d5ece-e825-4cd8-809f-1d4c72a2e0d3": falcon9CrewFive,
  "0297d3dc-0513-450a-babc-6f3da8e8c181": falcon9Rocket,
  "b69cfada-3320-4331-89e1-aaa8b49e6a9c": falcon9Polaris,
  "968067d1-8c12-4018-9854-b7b7d4bddc6b": atlasVn22,
  "07e945c1-2ec6-4d29-a500-1afbe920440f": atlasVn22Launch,
  "bc325945-4bee-4412-84e1-14998b2eba5f": falcon9CrewSix,
  "1caacff9-837e-493b-afd4-4da54eeccdf2": falcon9crew52023,
  "f058ecca-bda7-4797-ae47-b5c450b1bd78": newShephardNs21,
};

const MissionImage = (props) => {
  return <img src={imageObj[props.id]} alt="" />;
};

export default MissionImage;
