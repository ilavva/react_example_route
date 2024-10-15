import "./FoodDishes.css";
import { useEffect, useState } from "react";
import { Dish } from "../Dish/Dish";

//"https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg",
export type DishInfo = {
  strMeal: string;
  strMealThumb: string;

  idMeal: string;
};

//https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef
const FoodDishes = (props: { strDish: string }) => {
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
      <p>
        Chosen dish is: <strong>{props.strDish}</strong>
      </p>
      <div className="dishes-gallery">
        {dishesArr &&
          dishesArr.map((curr, index) => {
            return <Dish key={index} theDish={curr}></Dish>;
          })}
      </div>
    </div>
  );
};
export default FoodDishes;
