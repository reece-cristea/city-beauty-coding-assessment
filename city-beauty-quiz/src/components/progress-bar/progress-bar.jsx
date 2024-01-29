import React from 'react'
import './progress-bar.css'

const progressBar = ({currentProgress, setPage}) => {
  return (
    <div className='progress-bar'>
        <div className='back-button' onClick={(e) => {
            setPage(currentProgress - 1);
        }}>
            <img src='https://city-beauty-quiz-imgs.s3.amazonaws.com/back-arrow.png' alt="Back Arrow"></img>
        </div>
        <progress value={currentProgress / 7} />
        <p className='progress-text'>{currentProgress}/7</p>
    </div>
  )
}

export default progressBar