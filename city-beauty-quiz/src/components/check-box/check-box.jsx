import React from 'react'
import './check-box.css'

const checkBox = ({ isSelected }) => {
    if (isSelected) {
        return (
            <div className='check-box'>
                <img className="check-img-selected" src='https://city-beauty-quiz-imgs.s3.amazonaws.com/check.png' alt="Check"></img>
            </div>
        )
    } else {
        return (
            <div className='check-box'>
                <img className="check-img" src='https://city-beauty-quiz-imgs.s3.amazonaws.com/check.png' alt="Check"></img>
            </div>
        )
    }
}

export default checkBox