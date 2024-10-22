import { Dish } from "../Dish/Dish";
import { DishDetailedView } from "../DishDetailedView/DishDetailedView";
import { DishesGallery } from "../DishesGallery/DishesGallery";
import { DishInfo } from "../MealDBTypes";
import "./FoodRecipies.css";
import React, { useState } from "react";

export const FoodRecipies = () => {
  const [theDish, setTheDish] = useState<DishInfo>();
  return (
    <div className="content-all">
      <h1>Food Recipies</h1>
      <div className="content-data">
        <div className="content-menu">
          <DishesGallery setSelectedDish={setTheDish} />
        </div>
        <div className="content-details" id="Recipies">
          {theDish && <Dish theDish={theDish}></Dish>}
          {theDish && <DishDetailedView theDish={theDish} />}
        </div>
      </div>
    </div>
  );
};
