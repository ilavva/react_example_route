import "./FoodDishesSimple.css";
import { useEffect, useState } from "react";
import { DishSimple } from "../DishSimple/DishSimple";
import { DishInfoSimple } from "../MealDBTypesSimple";

//"https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg",

//https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef
const FoodDishesSimple = (props: { strDish: string }) => {
  const [dishesArr, setDishesArray] = useState<DishInfoSimple[]>();
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
      <div className="food-dishes-simple-gallery">
        {dishesArr &&
          dishesArr.map((curr) => {
            return <DishSimple key={curr.idMeal} theDish={curr}></DishSimple>;
          })}
      </div>
    </div>
  );
};
export default FoodDishesSimple;
