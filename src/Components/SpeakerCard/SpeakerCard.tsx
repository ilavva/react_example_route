import "./SpeakerCard.css";

import React from "react";
export type Speaker = {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  dob: {
    age: number;
  };
  phone: string;
  cell: string;
  nat: string;
  location: {
    city: string;
    state: string;
    country: string;

    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
};
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
