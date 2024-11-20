// src/components/IngredientList.jsx

import { availableIngredients } from "../App";

const IngredientList = ({ availableIngredients, addToBurger}) => {
    return (
        <ul>
            {availableIngredients.map((ingredient, idx) => (
                <li key={idx} style={{backgroundColor: ingredient.color}}> {ingredient.name}
                <button onClick={() => addToBurger(ingredient)}>+</button>
                </li>
            ))}
        </ul>
    );
  };
  
  export default IngredientList;
  