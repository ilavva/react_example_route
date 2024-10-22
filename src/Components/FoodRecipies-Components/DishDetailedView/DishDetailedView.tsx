import { useEffect, useState } from "react";
import { DishInfo, DishDetails } from "../MealDBTypes";

import "./DishDetailedView.css";

export const DishDetailedView = (props: { theDish: DishInfo }) => {
  const [dishDetails, setDishDetails] = useState<DishDetails>();

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${props.theDish.idMeal}`;
    fetch(url)
      .then((theData) => {
        return theData.json();
      })
      .then((theDataAsObj) => {
        setDishDetails(theDataAsObj.meals[0]);
      });
  }, [props.theDish]);

  return (
    <div className="dish-detiled-view">
      {!dishDetails && (
        <>
          <h2>{props.theDish.strMeal}</h2>

          <img src={props.theDish.strMealThumb} alt={props.theDish.strMeal} />
        </>
      )}

      {dishDetails && (
        <div className="dish-details">
          <h3>{dishDetails.strMeal}</h3>
          {dishDetails.strDrinkAlternate && (
            <p>{dishDetails.strDrinkAlternate}</p>
          )}

          {dishDetails.strCategory && <p>{dishDetails.strCategory}</p>}
          {dishDetails.strArea && <p>Origin: {dishDetails.strArea}</p>}

          {dishDetails.strInstructions && (
            <p className="dish-instructions">
              {dishDetails.strInstructions.split(".").map((line, index) => {
                return (
                  line.trim().length > 0 && (
                    <span key={index}>
                      {line.trim()}.
                      <br />
                    </span>
                  )
                );
              })}
            </p>
          )}
          {dishDetails.strMealThumb && (
            <img src={dishDetails.strMealThumb} alt={dishDetails.strMeal} />
          )}
          {dishDetails.strTags && <p>{dishDetails.strTags}</p>}
          {dishDetails.strYoutube && (
            <p>
              <a href={dishDetails.strYoutube}>video: {dishDetails.strMeal}</a>
            </p>
          )}
          {dishDetails.strIngredient1 && <h4>Ingredients:</h4>}

          <ul className="dish-ingredients">
            {Array.from({ length: 20 }, (_, i) => i + 1).map((index) => {
              const ingredient =
                dishDetails[`strIngredient${index}` as keyof DishDetails];
              const measure =
                dishDetails[`strMeasure${index}` as keyof DishDetails];

              return (
                ingredient &&
                ingredient.trim().length > 0 && (
                  <li key={index}>
                    {ingredient}
                    {measure && measure.trim().length > 0 && (
                      <span className="dish-measures"> {measure}</span>
                    )}
                  </li>
                )
              );
            })}
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
