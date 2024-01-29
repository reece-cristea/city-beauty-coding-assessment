
import './App.css';
import { IntroPage, ProblemAreaPage, HydratingIngredientsPage, SkinPage, ExplanationPage, MoisturizePage, DailyBodyCarePage, IssuesPage } from './containers';
import React, {useState} from "react";

function App() {

  const [page, setPage] = useState(0);

  const [quizAnswers, setQuizAnswers] = useState({
    goal: undefined,
    problemArea: undefined,
    hydratingMaterials: undefined,
    skinType: undefined,
    moisturizeLevel: undefined,
    dailyBodyCareTime: undefined,
    skincareIssues: undefined
  })
  
  const PageDisplay = () => {
    if (page === 0) {
      return <IntroPage setPage={setPage} setQuizAnswers={setQuizAnswers}/>
    } else if (page === 1) {
      return <ProblemAreaPage setPage={setPage} setQuizAnswers={setQuizAnswers}/>
    } else if (page === 2) {
      return <HydratingIngredientsPage setPage={setPage} setQuizAnswers={setQuizAnswers}/>
    } else if (page === 3) {
      return <SkinPage setPage={setPage} setQuizAnswers={setQuizAnswers}/>
    } else if (page === 4) {
      return <ExplanationPage setPage={setPage}/>
    } else if (page === 5) {
      return <MoisturizePage setPage={setPage} setQuizAnswers={setQuizAnswers}/>
    } else if (page === 6) {
      return <DailyBodyCarePage setPage={setPage} setQuizAnswers={setQuizAnswers}/>
    } else if (page === 7) {
      return <IssuesPage setPage={setPage} setQuizAnswers={setQuizAnswers}/>
    } 
  }

  return (
    <div className="App">
      <div className='header'>
        <img className='city-beauty-logo' src='https://city-beauty-quiz-imgs.s3.amazonaws.com/city-beauty-logo.png' alt="City Beauty Logo"></img>
      </div>
      <div className='form-content'>
        {PageDisplay()}
      </div>
      
    </div>
  );

}

export default App;
