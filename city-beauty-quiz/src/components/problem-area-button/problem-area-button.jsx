import React, { useState } from 'react'
import './problem-area-button.css'
import CheckBox from '../check-box/check-box';

const ProblemAreaButton = ({ problemArea, img, onToggle, index }) => {

  let [buttonSelected, setButtonSelected] = useState(false);

  const handleToggle = () => {
    setButtonSelected(!buttonSelected);
    onToggle(index);
  }

  if (buttonSelected) {
    return (
      <div className='toggle-button-selected' onClick={handleToggle}>
        <CheckBox isSelected={buttonSelected} />
        <div className='text'>
          <h3>{problemArea}</h3>
        </div>
        <div className='imgDiv'>
          <img className='img' src={img} alt='Problem Area'></img>
        </div>
      </div>
    );
  } else {
    return (
      <div className='toggle-button' onClick={handleToggle}>
        <CheckBox isSelected={buttonSelected} />
        <div className='text'>
          <h3>{problemArea}</h3>
        </div>
        <div className='imgDiv'>
          <img className='img' src={img} alt='Problem Area'></img>
        </div>
      </div>
    )
  }


}

export default ProblemAreaButton