import { Dispatch, SetStateAction } from "react";
import { DishInfo } from "../MealDBTypes";
import "./Dish.css";

export const Dish = (props: {
  theDish: DishInfo;
  setSelectedDish: Dispatch<SetStateAction<DishInfo | undefined>>;
}) => {
  return (
    <div
      className="dish-card"
      onClick={() => {
        props.setSelectedDish(props.theDish);
      }}
      onKeyDown={(e) => {
        // Trigger the click handler when the Enter key is pressed
        if (e.key === "Enter" || e.key === " ") {
          props.setSelectedDish(props.theDish);
        }
      }}
      tabIndex={0} // Makes the div focusable
      role="button" // Optional: improves accessibility by indicating that it's a button
      style={{ cursor: "pointer" }} // Optional: indicates that the element is clickable
    >
      <img src={props.theDish.strMealThumb} alt={props.theDish.strMeal} />
      <div>
        <p key={props.theDish.idMeal}>{props.theDish.strMeal}</p>
        <p>{props.theDish.idMeal}</p>
      </div>
    </div>
  );
};
