import React from 'react'
import './continue-button.css'

const continueButton = ({ setQuizAnswers, optionSelected }) => {
    if (optionSelected.length === 0) {
      return (
        <div className='disabled-continue-button'>
          <h3 className='continue-text'>Continue</h3>
          <div className='continue-arrow'>
            <img className="arrow" src='https://city-beauty-quiz-imgs.s3.amazonaws.com/arrow.png' alt='Continue'></img>
          </div>
        </div>
      );
    } else {
      return (
        <div className='continue-button' onClick={setQuizAnswers}>
          <h3 className='continue-text'>Continue</h3>
          <div className='continue-arrow'>
            <img className="arrow" src='https://city-beauty-quiz-imgs.s3.amazonaws.com/arrow.png' alt='Continue'></img>
          </div>
        </div>
      );
    }
}

export default continueButton