import { useEffect, useState } from "react";
import "./SpeakersGallery.css";
import { Speaker, SpeakerCard } from "../SpeakerCard/SpeakerCard";

//https://randomuser.me/api/?results=50
export const SpeakersGallery = (props: {
  setWhichSpeaker: React.Dispatch<React.SetStateAction<Speaker | undefined>>;
}) => {
  const [speackersArr, setSpeakersArr] = useState<Speaker[]>([]);
  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=50`)
      .then((dataFromAPI) => {
        return dataFromAPI.json();
      })
      .then((dataAsObj) => setSpeakersArr(dataAsObj.results as Speaker[]));
  }, []);

  const aSpeakerWasClicked = (theSpkr: Speaker) => {
    props.setWhichSpeaker(theSpkr);
  };

  return (
    <div>
      <h2>Speakers Gallery</h2>
      <div className="SpeakersGallery">
        {speackersArr &&
          speackersArr.map((curr) => {
            return (
              <div
                onClick={(e) => {
                  return aSpeakerWasClicked(curr);
                }}
              >
                <SpeakerCard speaker={curr} />
              </div>
            );
          })}
      </div>
    </div>
  );
};
