import FoodDishes from "../FoodDishes/FoodDishes";
import "./Food.css";
import React, { useEffect, useState } from "react";
export type Category = {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
};
export const Food = () => {
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
    <div className="food-component">
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
      <FoodDishes strDish={theChosenCategory}></FoodDishes>
    </div>
  );
};
