import React, { useEffect, useState } from 'react'
import './ProblemAreaPage.css'
import { ProblemAreaButton, ContinueButton, SkipButton, ProgressBar } from '../../components'

const ProblemAreaPage = ({setPage, setQuizAnswers}) => {

  const problemAreas = ["Loose skin on thighs and legs", "Thinning skin on arms", "Loose neck/jaw", "Saggy belly"]
  const problemAreasImgs = ["https://city-beauty-quiz-imgs.s3.amazonaws.com/pg-1-thighs.png", "https://city-beauty-quiz-imgs.s3.amazonaws.com/pg-1-thin-arms.png", "https://city-beauty-quiz-imgs.s3.amazonaws.com/pg-1-loose-neck.png", "https://city-beauty-quiz-imgs.s3.amazonaws.com/pg-1-saggy-belly.png"]
  const [selectedAreas, setSelectedAreas] = useState([]);

  const handleToggle = (id) => {
    // Check if the button is already toggled
    if (selectedAreas.includes(id)) {
      // Remove it from the array if already toggled
      setSelectedAreas(selectedAreas.filter((buttonId) => buttonId !== id));
    } else {
      // Add it to the array if not toggled
      setSelectedAreas([...selectedAreas, id]);
    }
  }

  const handleContinue = () => { 
    // Send form answers
    setQuizAnswers((quizAnswers) => {
      quizAnswers.problemArea = selectedAreas;
      console.log(quizAnswers);
      return quizAnswers;
    })

    setPage(2);
  }

  const handleSkip = () => {
    setPage(2);
  }


  return (
    <div className="form">
      <div>
        <ProgressBar currentProgress={1} setPage={setPage}/>
        <h2 className='form-title'>Select problem areas</h2>
        {problemAreas.map((problemArea, i) => {
          return <ProblemAreaButton problemArea={problemArea} img={problemAreasImgs[i]} onToggle={handleToggle} index={i} key={i}/>
        })}
        <ContinueButton setQuizAnswers={handleContinue} optionSelected={selectedAreas}/>
        <SkipButton handleSkip={handleSkip}/>
      </div>
    </div>
  )
}

export default ProblemAreaPage