import { Speaker } from "../SpeakerCard/SpeakerCard";
import "./SpeakerDetailedView.css";
import React from "react";

export const SpeakerDetailedView = (props: { spkr: Speaker }) => {
  return (
    <div className="SpeakerView">
      <img src={props.spkr.picture.large} alt="" />
      <p>
        {" "}
        {props.spkr.name.first} {props.spkr.name.last}
      </p>
      <p>email: {props.spkr.email}</p>
      {props.spkr.phone && <p>phone: {props.spkr.phone}</p>}
      {props.spkr.cell && <p>cell: {props.spkr.cell}</p>}
      <p>gender: {props.spkr.gender}</p>
      <p>age: {props.spkr.dob.age}</p>
      <p>nat: {props.spkr.nat}</p>
      <p>
        timezone: {props.spkr.location.timezone.offset} -{" "}
        {props.spkr.location.timezone.description}
      </p>
      <p>
        Location: {props.spkr.location.city} ,{props.spkr.location.state},{" "}
        {props.spkr.location.country},
      </p>
      <p>
        <strong>Latitude:</strong> {props.spkr.location.coordinates.latitude}
      </p>
      <p>
        <strong>Longitude:</strong> {props.spkr.location.coordinates.latitude}
      </p>
      <p>
        <a
          href={`https://www.google.com/maps?q=${props.spkr.location.coordinates.latitude},${props.spkr.location.coordinates.latitude}`}
          target="_blank"
        >
          View on Google Maps
        </a>
      </p>
    </div>
  );
};
