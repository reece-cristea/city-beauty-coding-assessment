import React, {useState} from 'react'
import {ContinueButton, SkipButton, Slider, ProgressBar} from '../../components'
import './SkinPage.css'

const SkinPage = ({setPage, setQuizAnswers}) => {

  const [selectedSkinType, setSelectedSkinType] = useState([0]);

  const handleContinue = () => { 
    // Send form answers
    setQuizAnswers((quizAnswers) => {
      quizAnswers.skinType = selectedSkinType;
      console.log(quizAnswers);
      return quizAnswers;
    })

    setPage(3);
  }

  const handleSkip = () => {
    setPage(4);
  }

  return (
    <div className='form'>
      <ProgressBar setPage={setPage} currentProgress={3}/>
      <h2 className='form-title'>How would you describe your skin?</h2>
      <Slider />
      <ContinueButton setQuizAnswers={handleContinue} optionSelected={selectedSkinType}/>
      <SkipButton handleSkip={handleSkip}/>
    </div>
  )
}

export default SkinPage