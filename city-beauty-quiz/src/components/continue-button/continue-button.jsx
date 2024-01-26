import React from 'react'
import './continue-button.css'

const continueButton = () => {
  return (
    <div className='continue-button'>
      <h3 className='continue-text'>Continue</h3>
      <div className='continue-arrow'>
        <img className="arrow" src='https://city-beauty-quiz-imgs.s3.amazonaws.com/arrow.png' alt='Continue'></img>
      </div>
    </div>
  )
}

export default continueButton