import React, { useState } from "react";
import "./Parent1.css";
import Child1 from "../Child1/Child1";
export const Parent1 = () => {
  const [chosenFlavor, setChosenFlavor] = useState("Vanilla");
  const userChoseFlavor = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
  };
  return (
    <div className="parent1-component">
      <select
        name=""
        id=""
        onChange={(e) => {
          userChoseFlavor(e);
          setChosenFlavor(e.target.value);
        }}
        defaultValue={0}
      >
        <option value="0" disabled>
          -- choose value --
        </option>
        <option value="Vanilla">Vanilla</option>
        <option value="Chocolate">Chocolate</option>
        <option value="Pistachio">Pistachio</option>
      </select>
      <Child1 myStr={chosenFlavor}></Child1>
    </div>
  );
};
