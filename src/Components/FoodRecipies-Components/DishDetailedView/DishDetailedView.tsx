import { useEffect, useState } from "react";
import { DishInfo, DishDetails } from "../MealDBTypes";

import "./DishDetailedView.css";

export const DishDetailedView = (props: { theDish: DishInfo }) => {
  const [dishDetails, setDishDatails] = useState<DishDetails>();
  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i${props.theDish.idMeal}`
    )
      .then((theData) => {
        return theData.json();
      })
      .then((theDataAsObj) => {
        setDishDatails(theDataAsObj.meals);
      });
  }, [props.theDish]);

  return (
    <div className="dish-detiled-view">
      <h2>Dish Detailed View</h2>
      <p>{props.theDish.strMeal}</p>

      <img src={props.theDish.strMealThumb} alt={props.theDish.strMeal} />

      {dishDetails && (
        <div>
          <h3>{dishDetails.strMeal}</h3>
          {dishDetails.strDrinkAlternate && (
            <p>({dishDetails.strDrinkAlternate})</p>
          )}

          {dishDetails.strCategory && <p>({dishDetails.strCategory})</p>}
          {dishDetails.strArea && <p>({dishDetails.strArea})</p>}
          {dishDetails.strInstructions && (
            <p>({dishDetails.strInstructions})</p>
          )}
          {dishDetails.strMealThumb && (
            <img src={dishDetails.strMealThumb} alt={dishDetails.strMeal} />
          )}
          {dishDetails.strTags && <p>({dishDetails.strTags})</p>}
          {dishDetails.strYoutube && (
            <p>
              <a href={dishDetails.strYoutube}>video: {dishDetails.strMeal}</a>
            </p>
          )}
          <ul className="dish-ingredients">
            {dishDetails.strIngredient1 && (
              <li>({dishDetails.strIngredient1})</li>
            )}
            {dishDetails.strIngredient2 && (
              <li>({dishDetails.strIngredient2})</li>
            )}
            {dishDetails.strIngredient3 && (
              <li>({dishDetails.strIngredient3})</li>
            )}
            {dishDetails.strIngredient4 && (
              <li>({dishDetails.strIngredient4})</li>
            )}
            {dishDetails.strIngredient5 && (
              <li>({dishDetails.strIngredient5})</li>
            )}
            {dishDetails.strIngredient6 && (
              <li>({dishDetails.strIngredient6})</li>
            )}
            {dishDetails.strIngredient7 && (
              <li>({dishDetails.strIngredient7})</li>
            )}
            {dishDetails.strIngredient8 && (
              <li>({dishDetails.strIngredient8})</li>
            )}
            {dishDetails.strIngredient9 && (
              <li>({dishDetails.strIngredient9})</li>
            )}
            {dishDetails.strIngredient10 && (
              <li>({dishDetails.strIngredient10})</li>
            )}
            {dishDetails.strIngredient11 && (
              <li>({dishDetails.strIngredient11})</li>
            )}
            {dishDetails.strIngredient12 && (
              <li>({dishDetails.strIngredient12})</li>
            )}
            {dishDetails.strIngredient13 && (
              <li>({dishDetails.strIngredient13})</li>
            )}
            {dishDetails.strIngredient14 && (
              <li>({dishDetails.strIngredient14})</li>
            )}
            {dishDetails.strIngredient15 && (
              <li>({dishDetails.strIngredient15})</li>
            )}
            {dishDetails.strIngredient16 && (
              <li>({dishDetails.strIngredient16})</li>
            )}
            {dishDetails.strIngredient17 && (
              <li>({dishDetails.strIngredient17})</li>
            )}

            {dishDetails.strIngredient18 && (
              <li>({dishDetails.strIngredient18})</li>
            )}
            {dishDetails.strIngredient19 && (
              <li>({dishDetails.strIngredient19})</li>
            )}
            {dishDetails.strIngredient20 && (
              <li>({dishDetails.strIngredient20})</li>
            )}
          </ul>
          {dishDetails.strDrinkAlternate && (
            <p>({dishDetails.strDrinkAlternate})</p>
          )}
          {dishDetails.strDrinkAlternate && (
            <p>({dishDetails.strDrinkAlternate})</p>
          )}
          {dishDetails.strDrinkAlternate && (
            <p>({dishDetails.strDrinkAlternate})</p>
          )}
          {dishDetails.strDrinkAlternate && (
            <p>({dishDetails.strDrinkAlternate})</p>
          )}
        </div>
      )}
    </div>
  );
};
