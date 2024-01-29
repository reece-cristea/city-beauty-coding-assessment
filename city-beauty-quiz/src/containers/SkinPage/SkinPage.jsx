import React, { useEffect, useState } from 'react'
import { ContinueButton, SkipButton, Slider, ProgressBar} from '../../components'
import './SkinPage.css'

const SkinPage = ({ setPage, setQuizAnswers }) => {

  const desktopImgLinks = ["https://city-beauty-quiz-imgs.s3.amazonaws.com/pg-3-normal-d.png", "https://city-beauty-quiz-imgs.s3.amazonaws.com/pg-3-dry-d.png", "https://city-beauty-quiz-imgs.s3.amazonaws.com/pg-3-microwrinkles-d.png", "https://city-beauty-quiz-imgs.s3.amazonaws.com/pg-3-scaly-d.png", "https://city-beauty-quiz-imgs.s3.amazonaws.com/pg-3-itchy-d.png", "https://city-beauty-quiz-imgs.s3.amazonaws.com/pg-3-crepey-d.png"];
  const mobileImgLinks = ["https://city-beauty-quiz-imgs.s3.amazonaws.com/pg-3-normal-m.jpg", "https://city-beauty-quiz-imgs.s3.amazonaws.com/pg-3-dry-m.jpg", "https://city-beauty-quiz-imgs.s3.amazonaws.com/pg-3-microwrinkles-m.jpg", "https://city-beauty-quiz-imgs.s3.amazonaws.com/pg-3-scaly-m.jpg", "https://city-beauty-quiz-imgs.s3.amazonaws.com/pg-3-itchy-m.jpg", "https://city-beauty-quiz-imgs.s3.amazonaws.com/pg-3-crepey-m.jpg"];
  const labels = ["Normal Skin", "Dry Skin", "Microwrinkles", "Scaly, Rough Skin", "Itchy, Irritated Skin", "Crepey Skin"];
  const minMaxLabels = ["Normal Skin", "Crepey Skin"];

  const [selectedSkinType, setSelectedSkinType] = useState(0);

  const handleContinue = () => {
    // Send form answers
    setQuizAnswers((quizAnswers) => {
      quizAnswers.skinType = selectedSkinType;
      console.log(quizAnswers);
      return quizAnswers;
    })
    setPage(4);
  }

  const handleSkip = () => {
    setPage(4);
  }

  return (
    <div className='form'>
      <ProgressBar setPage={setPage} currentProgress={3} />
      <div className='form-display'>
        <div className='sp-form-img'>
          <img className="skin-type-img" srcSet={`${mobileImgLinks[selectedSkinType]} 440w, ${desktopImgLinks[selectedSkinType]} 1980w`} alt='Skin type' />
        </div>
        <div className='sp-form-text'>
          <h2 className='sp-form-title'>How would you describe your skin?</h2>
          <Slider setValue={setSelectedSkinType} valueLabels={labels} range={5} minMaxLabels={minMaxLabels}/>
          <ContinueButton setQuizAnswers={handleContinue} optionSelected={selectedSkinType} />
          <SkipButton handleSkip={handleSkip} />
        </div>

      </div>

    </div>
  )
}

export default SkinPage