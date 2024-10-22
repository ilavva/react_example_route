import "./DishSimple.css";
import { DishInfoSimple } from "../MealDBTypesSimple";

export const DishSimple = (props: { theDish: DishInfoSimple }) => {
  return (
    <div
      className="dish-simple-card"
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
