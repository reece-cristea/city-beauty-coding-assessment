import React, {useState} from 'react'
import './none-button.css'

const NoneButton = ({onToggle, text, index, selectedIngredients}) => {

  let buttonSelected = selectedIngredients.includes(index);

  const handleToggle = () => {
    buttonSelected = !buttonSelected;
    onToggle(index);
  }

  if (buttonSelected) {
    return (
      <div className='toggle-button-selected' onClick={handleToggle}>
        <img className="none-img" src='https://city-beauty-quiz-imgs.s3.amazonaws.com/x.png' alt="None"/>
        <div className='text'>
          
          <h3>{text}</h3>
        </div>
      </div>
    );
  } else {
    return (
      <div className='toggle-button' onClick={handleToggle}>
        <img className="none-img" src='https://city-beauty-quiz-imgs.s3.amazonaws.com/x.png' alt="None"/>
        <div className='text'>
          
          <h3>{text}</h3>
        </div>
      </div>
    )
  }
}

export default NoneButton