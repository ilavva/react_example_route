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
  const [markedDish, setMarkedDish] = useState<DishInfo>();
  const handleMarkDish = (dish: DishInfo) => {
    setMarkedDish(dish);
    props.setSelectedDish(dish);
  };
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
          dishesArr.map((dish) => {
            return (
              // setSelectedDish={props.setSelectedDish}
              <div
                className={
                  markedDish && markedDish.idMeal == dish.idMeal
                    ? "selected"
                    : ""
                }
                key={dish.idMeal}
                onClick={() => {
                  handleMarkDish(dish);
                }}
                onKeyDown={(e) => {
                  // Trigger the click handler when the Enter key is pressed
                  if (e.key === "Enter" || e.key === " ") {
                    handleMarkDish(dish);
                  }
                }}
                tabIndex={0} // Makes the div focusable
                role="button" // Optional: improves accessibility by indicating that it's a button
                style={{ cursor: "pointer" }} // Optional: indicates that the element is clickable
              >
                <Dish theDish={dish}></Dish>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default FoodDishes;
