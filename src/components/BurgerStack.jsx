// `src/components/BurgerStack.jsx`

import { useState } from 'react'


const BurgerStack = ({ ingredients, removeFromBurger }) => {
  return (
    <ul>
      {ingredients.map((ingredient, idx) => (
        <li key={idx} style={{ backgroundColor: ingredient.color }}>
          {ingredient.name}
          <button onClick= {() => removeFromBurger(idx)}>x</button>
        </li>
      ))}
    </ul>
  )
}

export default BurgerStack;
