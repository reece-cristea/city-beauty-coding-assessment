import React, {useState} from 'react';
import './DailyBodyCarePage.css'
import { ProgressBar, ContinueButton, SkipButton, DCTRadioButton } from '../../components';

const DailyBodyCarePage = ({ setPage, setQuizAnswers }) => {
  const dctTimes = ["10 Minutes", "30 Minutes", "1 Hour", "5 Minutes"]
  const [selectedDCT, setSelectedDCT] = useState([]);

  const handleToggle = (id) => {
    setSelectedDCT([id]);
  }

  const handleContinue = () => { 
    // Send form answers
    setQuizAnswers((quizAnswers) => {
      quizAnswers.dailyBodyCareTime = selectedDCT;
      console.log(quizAnswers);
      return quizAnswers;
    })

    setPage(7);
  }

  const handleSkip = () => {
    setPage(7);
  }


  return (
    <div className="form">
      <div children="form-content">
        <ProgressBar currentProgress={5} setPage={setPage}/>
        <h2 className='form-title'>How much time do you spend on body care daily:</h2>
        {dctTimes.map((dctTime, i) => {
          return <DCTRadioButton text={dctTime} onToggle={handleToggle} index={i} selectedDCT={selectedDCT} key={i}/>
        })}
        <ContinueButton setQuizAnswers={handleContinue} optionSelected={selectedDCT}/>
        <SkipButton handleSkip={handleSkip}/>
      </div>
    </div>
  )
}

export default DailyBodyCarePage