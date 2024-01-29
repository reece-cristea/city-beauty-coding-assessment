import React, {useState} from 'react'
import CheckBox from '../check-box/check-box';
import './ingredient-button.css'

const IngredientButton = ({ ingredient, desc, onToggle, index, selectedIngredients}) => {
  
  let buttonSelected = selectedIngredients.includes(index);

  const handleToggle = () => {
    buttonSelected = !buttonSelected;
    onToggle(index);
  }

  if (buttonSelected) {
    return (
      <div className='toggle-button-selected' onClick={handleToggle}>
        <CheckBox isSelected={buttonSelected} />
        <div className='text'>
          <h3>{ingredient}</h3>
          <p>{desc}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className='toggle-button' onClick={handleToggle}>
        <CheckBox isSelected={buttonSelected} />
        <div className='text'>
          <h3>{ingredient}</h3>
          <p>{desc}</p>
        </div>
      </div>
    )
  }
}

export default IngredientButton