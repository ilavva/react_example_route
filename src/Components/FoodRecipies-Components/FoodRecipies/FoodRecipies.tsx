import { DishDetailedView } from "../DishDetailedView/DishDetailedView";
import { DishesGallery } from "../DishesGallery/DishesGallery";
import "./FoodRecipies.css";
import React from "react";

export const FoodRecipies = () => {
  return (
    <div>
      <h1>Food Recipies</h1>
      <DishesGallery />
      <DishDetailedView />
    </div>
  );
};
