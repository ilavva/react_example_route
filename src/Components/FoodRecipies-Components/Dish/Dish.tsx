import { DishInfo } from "../MealDBTypes";
import "./Dish.css";

export const Dish = (props: { theDish: DishInfo }) => {
  return (
    <div className="dish-card">
      <img src={props.theDish.strMealThumb} alt={props.theDish.strMeal} />
      <div>
        <p>{props.theDish.strMeal}</p>
      </div>
    </div>
  );
};
