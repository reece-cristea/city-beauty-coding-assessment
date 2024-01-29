import React from 'react'
import './skip-button.css'

const skipButton = ({handleSkip}) => {
  return (
    <div className='skip-button' onClick={handleSkip}>Skip</div>
  )
}

export default skipButton