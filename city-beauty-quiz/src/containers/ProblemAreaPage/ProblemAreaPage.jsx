import React from 'react'
import './ProblemAreaPage.css'
import { ProblemAreaButton, ContinueButton, SkipButton } from '../../components'

const ProblemAreaPage = ({setPage, quizAnswers}) => {

  const problemAreas = ["Loose skin on thighs and legs", "Thinning skin on arms", "Loose neck/jaw", "Saggy belly"]
  const problemAreasImgs = ["https://city-beauty-quiz-imgs.s3.amazonaws.com/pg-1-thighs.png", "https://city-beauty-quiz-imgs.s3.amazonaws.com/pg-1-thin-arms.png", "https://city-beauty-quiz-imgs.s3.amazonaws.com/pg-1-loose-neck.png", "https://city-beauty-quiz-imgs.s3.amazonaws.com/pg-1-saggy-belly.png"]

  return (
    <div className="form">
      <div>
        <h2 className='form-title'>Select problem areas</h2>
        {problemAreas.map((problemArea, i) => {
          return <ProblemAreaButton problemArea={problemArea} img={problemAreasImgs[i]}/>
        })}
        <ContinueButton />
        <SkipButton />
      </div>
    </div>
  )
}

export default ProblemAreaPage