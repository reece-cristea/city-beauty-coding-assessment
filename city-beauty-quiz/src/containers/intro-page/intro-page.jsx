import React from 'react'
import { GoalButton } from '../../components';
import './intro-page.css';

const introPage = ({setPage, setQuizAnswers}) => {


    const goalSelections = ["Remove Crepey Skin", "Relieve Dry, Flaky Skin", "Get Firmer, Tighter, Younger Looking Skin"];
    const goalPics = ["https://city-beauty-quiz-imgs.s3.amazonaws.com/intro-crepey.png", "https://city-beauty-quiz-imgs.s3.amazonaws.com/intro-dry.png", "https://city-beauty-quiz-imgs.s3.amazonaws.com/intro-tighter.png"]


    return (
        <div className='intro-page-container'>
            <div className='desc-container'>
                <h1 className='desc-title'>Achieve Perfectly <i>Smooth</i>, <i>Youthful</i> Skin</h1>
                <p className='desc-text'>Get a personalized skin care treatment</p>
            </div>
            
            <div className='selections'>
                <h2 className='goal-title'>Choose Your Goal</h2>
                {goalSelections.map((goal, i) => {
                    return <GoalButton text={goal} img={goalPics[i]} setPage={setPage} setQuizAnswers={setQuizAnswers} goal={i} key={i}/>
                })}
            </div>
        </div>
    )
}

export default introPage