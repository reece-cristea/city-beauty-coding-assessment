import React, { useEffect, useState } from 'react'
import './IssuesPage.css'
import { ProgressBar, IssueButton, ContinueButton, SkipButton, NoneButton, ShareBox } from '../../components'

const IssuesPage = ({setPage, setQuizAnswers}) => {

  const issues = ["Overwhelmed, too many products to keep track of", "Overcomplicated, hard to understand ingredients", "Hopelessness", "No Results", "Anxiety"];

  const [selectedIssues, setSelectedIssues] = useState([]);

  const handleToggle = (id) => {
    // Check if the button is already toggled
    if (selectedIssues.includes(id)) {
      // Remove it from the array if already toggled
      setSelectedIssues(selectedIssues.filter((buttonId) => buttonId !== id));
    } else {
      if (id === 5) {
        setSelectedIssues([5]);
      } else {
        // Add it to the array if not toggled
        selectedIssues.filter((buttonId) => buttonId !== 5);
        setSelectedIssues([...selectedIssues.filter((buttonId) => buttonId !== 5), id]);
      }
    }
  }

  const handleContinue = () => { 
    // Send form answers
    setQuizAnswers((quizAnswers) => {
      quizAnswers.skincareIssues = selectedIssues;
      return quizAnswers;
    })

    setPage(0);
  }

  const handleSkip = () => {
    setPage(0);
  }

  return (
    <div className='form'>
      <ProgressBar setPage={setPage} currentProgress={6}/>
      <h2 className='ib-form-title'>Have you experienced any of these issues in your previous skincare attempts?</h2>
      {issues.map((issue, i) => {
        return <IssueButton ingredient={issue} onToggle={handleToggle} index={i} selectedIngredients={selectedIssues} key={i}/>
      })}
      <hr className="solid" />
      <NoneButton onToggle={handleToggle} text={"None of the Above"} index={5} selectedIngredients={selectedIssues}/>
      <ContinueButton setQuizAnswers={handleContinue} optionSelected={selectedIssues}/>
      <SkipButton handleSkip={handleSkip}/>
      <ShareBox optionSelected={selectedIssues}/>
    </div>
  )
}

export default IssuesPage