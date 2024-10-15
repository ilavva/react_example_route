import "./Dish.css";
import { DishInfo } from "../FoodDishes/FoodDishes";
export const Dish = (props: { theDish: DishInfo }) => {
  return (
    <div className="dish-card">
      <img src={props.theDish.strMealThumb} alt={props.theDish.strMeal} />
      <div>
        <p key={props.theDish.idMeal}>{props.theDish.strMeal}</p>
        <p>{props.theDish.idMeal}</p>
      </div>
    </div>
  );
};
