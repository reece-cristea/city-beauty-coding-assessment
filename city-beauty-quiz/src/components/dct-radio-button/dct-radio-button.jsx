import React, {useState} from 'react'
import './dct-radio-button.css'

const DCTRadioButton = ({text, onToggle, index, selectedDCT}) => {

    let buttonSelected = selectedDCT.includes(index);

  const handleToggle = () => {
    buttonSelected = !buttonSelected;
    onToggle(index);
  }
  
    if (buttonSelected) {
      return (
        <div className='radio-button-selected' onClick={handleToggle}>
          <div className='text'>
            <h3>{text}</h3>
          </div>
        </div>
      );
    } else {
      return (
        <div className='radio-button' onClick={handleToggle}>
          <div className='text'>
            <h3>{text}</h3>
          </div>
        </div>
      )
    }
  
}

export default DCTRadioButton