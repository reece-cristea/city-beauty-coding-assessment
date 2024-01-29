import React from 'react'
import './share-box.css'

const shareBox = ({ optionSelected }) => {
    if (optionSelected.length === 0) {
        return (
            <div>

            </div>
        );
    } else {
        return (
            <div className='share-box'>
                <h3 className='share-text'>Thanks for sharing!</h3>
                <p>
                    We’ve discovered that a lot of people have faced the same setbacks. City Beauty has a clear one-step treatment that is easy to follow with long-term results. In less than two minutes, you will feel better than ever.
                </p>
            </div>
        );
    }
}

export default shareBox