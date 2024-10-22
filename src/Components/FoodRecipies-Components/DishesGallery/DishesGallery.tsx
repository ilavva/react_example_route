import FoodDishes from "../FoodDishes/FoodDishes";
import { Category, DishInfo } from "../MealDBTypes";
import "./DishesGallery.css";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

export const DishesGallery = (props: {
  setSelectedDish: Dispatch<SetStateAction<DishInfo | undefined>>;
}) => {
  const [categoriesArray, setCategoriesArray] = useState<Category[]>();
  const [theChosenCategory, setTheChosenCategory] = useState("");

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((theData) => {
        return theData.json();
      })
      .then((theDataAsObj) => {
        setCategoriesArray(theDataAsObj.categories);
      });
  }, []);
  const userChoseCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheChosenCategory(e.target.value);
  };
  return (
    <div className="dishes-gallery">
      <div>
        <h2>Dishes Gallery</h2>
        <select name="" id="" onChange={userChoseCategory} defaultValue={0}>
          <option key={0} value={0} disabled>
            {`which food do you like?`}
          </option>
          {categoriesArray &&
            categoriesArray.map((curr) => {
              return <option key={curr.idCategory}>{curr.strCategory}</option>;
            })}
        </select>
      </div>
      <div>
        <FoodDishes
          strDish={theChosenCategory}
          setSelectedDish={props.setSelectedDish}
        ></FoodDishes>
      </div>
    </div>
  );
};
