import { Speaker } from "./Speaker";
import "./SpeakerCard.css";

import React from "react";

export const SpeakerCard = (props: { speaker: Speaker }) => {
  return (
    <div className="SpeakerCard">
      <img src={props.speaker.picture.thumbnail} alt="" />
      <p>
        {" "}
        {props.speaker.name.first} {props.speaker.name.last}
      </p>
    </div>
  );
};
