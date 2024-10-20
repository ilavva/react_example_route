import CheesecakeRecipe from "../CheesecakeRecipe/CheesecakeRecipe";
import { Gallery } from "../Gallery/Gallery";
import { PersonCard } from "../PersonCard/PersonCard";
import { Product } from "../Product/Product";
import "./Lesson1.css";

import React, { useState } from "react";

export const Lesson1 = () => {
  //let x = false;
  const [x, setX] = useState(false);
  //-------------------------------
  const myFunction = () => {
    return "Orrrranggge";
  };
  //-------------------------------
  function btnWasClicked() {
    console.log(x + " the button was clicked! " + new Date().getTime());
    if (x === true) {
      // x = false;
      setX(false);
    } else {
      // x = true;
      setX(true);
    }
  }

  return (
    <div>
      <Product
        prodName={"headphones"}
        prodPrice={105.25}
        productDescription={"Best in the market."}
      />
      <PersonCard />
      <ul>
        <li>Vanilla</li>
        <li>Chocolate</li>
        <li>Pistachio</li>
        <li>Strawberry</li>
        <li>{myFunction()}</li>
      </ul>
      <Gallery />
      <Product prodName={"speaker"} prodPrice={89.3} productDescription={""} />
      <input
        type="button"
        value="click to hide/show the story"
        onClick={btnWasClicked}
      />
      {x && (
        <div>
          <h2>This is s story</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
            possimus dolores quia sunt dignissimos quidem nobis. Distinctio,
            laborum modi? Iure deserunt odit ratione nulla nobis! Consequatur
            quos voluptate dolor. Ipsa quaerat architecto deserunt at vitae
            voluptatem. Sequi pariatur deserunt ipsa esse iure ipsum nobis
            quaerat recusandae officia quod laudantium quisquam neque harum,
            sapiente facere quas necessitatibus corrupti dolor ad quos atque.
            Reiciendis minima nobis perferendis mollitia expedita quis
            consectetur tenetur, adipisci reprehenderit iste laudantium, quae,
            deserunt possimus sequi quasi nulla exercitationem? Error minus
            placeat impedit, quia, veritatis officia maiores sequi debitis
            excepturi iure sunt dicta ab fugiat, harum perspiciatis inventore?
          </p>
        </div>
      )}

      <CheesecakeRecipe />
    </div>
  );
};
