import React from 'react'

const goalButton = ({ text, img, setPage, setQuizAnswers, goal }) => {
    return (
        <div className="goal-selection" onClick={(e) => {
            setPage(1);
            setQuizAnswers((quizAnswers) => {
                quizAnswers.goal = goal;
                return quizAnswers;
            });
        }}>
            <h3 className='goal'>{text}</h3>
            <img className='goal-img' src={img} alt='Skin Goal Selection'></img>
        </div>
    )
}

export default goalButton