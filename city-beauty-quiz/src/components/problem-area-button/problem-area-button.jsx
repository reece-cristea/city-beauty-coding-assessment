import React from 'react'
import './problem-area-button.css'

const problemAreaButton = ({ problemArea, img }) => {
  return (
    <div className='toggle-button'>
      <div className='check-box'></div>
      <div className='text'>
        <h3>{problemArea}</h3>
      </div>

      <div className='imgDiv'>
        <img className='img' src={img} alt='Problem Area'></img>
      </div>
    </div>
  )
}

export default problemAreaButton