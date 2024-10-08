import { useState } from "react";
import "./CheesecakeRecipe.css";

const CheescakeRecipe = () => {
  const [shouldShowRecipie, setShouldShowRecipie] = useState(false);
  const showHideInstructions = () => {
    setShouldShowRecipie(!shouldShowRecipie);
  };
  return (
    <div className="CheescakeRecipie">
      <h3>Cheescake</h3>
      <img src="/img/cheesecake.jpg" alt="cheesecake" />
      <button onClick={showHideInstructions}>show/hide instructions</button>
      {shouldShowRecipie && <p>Here goes instruction details.</p>}
    </div>
  );
};
export default CheescakeRecipe;
