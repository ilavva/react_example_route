import { Speaker } from "../SpeakerCard/Speaker";
import { SpeakerDetailedView } from "../SpeakerDetailedView/SpeakerDetailedView";
import { SpeakersGallery } from "../SpeakersGallery/SpeakersGallery";
import "./Conference.css";

import React, { useState } from "react";

export const Conference = () => {
  const [theChosenSpeaker, setTheChosenSpeaker] = useState<Speaker>();
  return (
    <div>
      <h1>This is the Best conference</h1>
      <div className="mainContent">
        <div className="leftSide">
          <SpeakersGallery setWhichSpeaker={setTheChosenSpeaker} />
        </div>
        <div className="rightSide">
          {theChosenSpeaker && <SpeakerDetailedView spkr={theChosenSpeaker} />}
        </div>
      </div>
    </div>
  );
};
