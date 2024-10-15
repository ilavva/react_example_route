import { StringLiteral } from "typescript";
import "./FoodDishes.css";
import React, { useEffect, useState } from "react";

//"https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg",
export type Dish = {
  strMeal: string;
  strMealThumb: string;

  idMeal: string;
};

//https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef
const FoodDishes = (props: { strDish: string }) => {
  const [dishesArr, setDishesArray] = useState<Dish[]>();
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
          dishesArr.map((curr) => {
            return (
              <div className="dish-card">
                <img src={`${curr.strMealThumb}/preview`} />{" "}
                <div>
                  <p key={curr.idMeal}>{curr.strMeal}</p>
                  <p>{curr.idMeal}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default FoodDishes;
