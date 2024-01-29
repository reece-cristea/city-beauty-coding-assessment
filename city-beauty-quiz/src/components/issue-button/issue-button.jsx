import React, {useState} from 'react'
import CheckBox from '../check-box/check-box';
import './issue-button.css'

const IssueButton = ({ ingredient, onToggle, index, selectedIngredients}) => {
  
  let buttonSelected = selectedIngredients.includes(index);

  const handleToggle = () => {
    buttonSelected = !buttonSelected;
    onToggle(index);
  }

  if (buttonSelected) {
    return (
      <div className='toggle-button-selected' onClick={handleToggle}>
        <CheckBox isSelected={buttonSelected} />
        <div className='ib-text'>
          <h3>{ingredient}</h3>
        </div>
      </div>
    );
  } else {
    return (
      <div className='toggle-button' onClick={handleToggle}>
        <CheckBox isSelected={buttonSelected} />
        <div className='ib-text'>
          <h3>{ingredient}</h3>
        </div>
      </div>
    )
  }
}

export default IssueButton