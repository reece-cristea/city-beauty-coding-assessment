import React, {useState} from 'react'
import { ProgressBar, Slider, ContinueButton, SkipButton } from '../../components';
import './MoisturizePage.css';

const MoisturizePage = ({setPage, setQuizAnswers}) => {

  const [selectedMoistureStatus, setMoistureStatus] = useState(0);
  const labels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const minMaxLabels = ["Newcomer", "Pro"];
  const moisturizeEvalLabels = ["Newcomer", "Newcomer", "Newcomer", "Newcomer", "Amateur", "Amateur", "Amateur", "Pro", "Pro", "Pro"];
  const moisturizeEvalTexts = ["Whenever I touch my skin it feels flaky, but I leave it alone", "I have applied lotion before to my dry, crepey skin (Rarely)", "I do apply lotion/cream sometimes on dry skin", "I do apply lotion/cream to my skin to feel moisturized", "I try to apply lotion/cream, but still not regularly", "I apply lotion/cream fairly regularly, at least once a week", "I apply lotion/cream after every shower consistently for the last 1-3 months", "I’m committed to moisturize my skin whenever I can", "Oh, trust me. I deeply hydrate my skin, but I want to take it to the next level", "I’m on fire. Deeply hydrating my skin every day is a must to stimulate collagen/elastin"];

  const handleContinue = () => {
    // Send form answers
    setQuizAnswers((quizAnswers) => {
      quizAnswers.moisturizeLevel = selectedMoistureStatus;
      console.log(quizAnswers);
      return quizAnswers;
    })
    setPage(6);
  }

  const handleSkip = () => {
    setPage(6);
  }

  return (
    <div className='form'>
      <ProgressBar setPage={setPage} currentProgress={4} />
      <div className='mp-form-display'>
          <h2 className='mp-form-title'>How often do you moisturize your skin?</h2>
          <p className='mp-slider-title'>Choose current level to align with your routine:</p>
          <Slider setValue={setMoistureStatus} valueLabels={labels} range={9} minMaxLabels={minMaxLabels}/>
          <div className='moisturize-eval'>
            <h2>
              {moisturizeEvalLabels[selectedMoistureStatus]}
            </h2>
            <p>
              {moisturizeEvalTexts[selectedMoistureStatus]}
            </p>
          </div>
          <ContinueButton setQuizAnswers={handleContinue} optionSelected={selectedMoistureStatus} />
          <SkipButton handleSkip={handleSkip} />
        </div>

      </div>
  )
}

export default MoisturizePage