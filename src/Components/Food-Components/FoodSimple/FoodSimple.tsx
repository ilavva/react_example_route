import FoodDishesSimple from "../FoodDishesSimple/FoodDishesSimple";

import { CategorySimple } from "../MealDBTypesSimple";
import "./FoodSimple.css";
import React, { useEffect, useState } from "react";

export const FoodSimple = () => {
  const [categoriesArray, setCategoriesArray] = useState<CategorySimple[]>();
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
    <div className="food-simple-component">
      <select name="" id="" onChange={userChoseCategory} defaultValue={0}>
        <option key={0} value={0} disabled>
          {`which food do you like?`}
        </option>
        {categoriesArray &&
          categoriesArray.map((curr) => {
            return <option key={curr.idCategory}>{curr.strCategory}</option>;
          })}
      </select>
      <div></div>
      <FoodDishesSimple strDish={theChosenCategory}></FoodDishesSimple>
    </div>
  );
};
