import "./FoodDishes.css";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Dish } from "../Dish/Dish";
import { DishInfo } from "../MealDBTypes";

//"https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg",

//https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef
const FoodDishes = (props: {
  strDish: string;
  setSelectedDish: Dispatch<SetStateAction<DishInfo | undefined>>;
}) => {
  const [dishesArr, setDishesArray] = useState<DishInfo[]>();
  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${props.strDish}`
    )
      .then((theData) => {
        return theData.json();
      })
      .then((theDataAsObj) => {
        setDishesArray(theDataAsObj.meals);
      });
  }, [props.strDish]);
  return (
    <div>
      {props.strDish !== "" ? (
        <p>
          For <strong>{props.strDish}</strong> we have the following dishes:
        </p>
      ) : (
        <p>Select the Dish ↑</p>
      )}
      <div className="food-dishes-gallery">
        {dishesArr &&
          dishesArr.map((curr) => {
            return (
              <Dish
                key={curr.idMeal}
                theDish={curr}
                setSelectedDish={props.setSelectedDish}
              ></Dish>
            );
          })}
      </div>
    </div>
  );
};
export default FoodDishes;
