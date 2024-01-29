import React from 'react'
import './ExplanationPage.css'
import { ContinueButton, SkipButton } from '../../components'

const ExplanationPage = ({ setPage }) => {

  const handleContinue = () => { 
    setPage(5);
  }

  const handleSkip = () => {
    setPage(5);
  }

  return (
    <div className='ex-form'>
      <div className='form-display'>
        <div className='form-img'>
          <img className="explain-img" src="https://city-beauty-quiz-imgs.s3.amazonaws.com/woman-crepe-halfway-there.gif" alt="Crepey Skin"/>
        </div>
        <div className='form-text'>
          <h3>Halfway there!</h3>
          <h2 className='form-title'>Why do people give up on protecting and hydrating their skin?</h2>
          <p className='bold'>
            The No.1 reason is using the wrong products that just aren't effective.
          </p>
          <p>
            You'll achieve much more in just a few weeks of starting City Beauty's treatment.
          </p>
          <p>
            Our primary goal is to deliver deep long-lasting hydration that will prevent harsh aging and reduce the appearance of thinning, crepey skin. Visibly achieve healthy, supple skin with us.
          </p>
          <ContinueButton setQuizAnswers={handleContinue} optionSelected={[0]} />
          <SkipButton handleSkip={handleSkip} />
        </div>

      </div>

    </div>
  )
}

export default ExplanationPage