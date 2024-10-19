import { useEffect, useState } from "react";
import "./SpeakersGallery.css";
import { Speaker, SpeakerCard } from "../SpeakerCard/SpeakerCard";

//https://randomuser.me/api/?results=50
export const SpeakersGallery = (props: {
  setWhichSpeaker: React.Dispatch<React.SetStateAction<Speaker | undefined>>;
}) => {
  const [speackersArr, setSpeakersArr] = useState<Speaker[]>([]);
  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=8`)
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
                key={curr.login.uuid}
                onClick={() => {
                  return aSpeakerWasClicked(curr);
                }}
                onKeyDown={(e) => {
                  // Trigger the click handler when the Enter key is pressed
                  if (e.key === "Enter" || e.key === " ") {
                    aSpeakerWasClicked(curr);
                  }
                }}
                tabIndex={0} // Makes the div focusable
                role="button" // Optional: improves accessibility by indicating that it's a button
                style={{ cursor: "pointer" }} // Optional: indicates that the element is clickable
              >
                <SpeakerCard speaker={curr} />
              </div>
            );
          })}
      </div>
    </div>
  );
};
