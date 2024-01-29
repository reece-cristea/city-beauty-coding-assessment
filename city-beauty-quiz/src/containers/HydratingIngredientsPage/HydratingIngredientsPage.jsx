import React, { useEffect, useState } from 'react'
import './HydratingIngredientsPage.css'
import { ProgressBar, IngredientButton, ContinueButton, SkipButton, NoneButton } from '../../components'

const HydratingIngredientsPage = ({setPage, setQuizAnswers}) => {

  const ingredients = ["Niacinamide", "Lipid Compound", "Ribose", "Jojoba Leaf Extract", "Glycerin"]
  const descriptions = [
    "This is a form of vitamin B that supports protein and collagen to promote optimal skin health",
    "This improves moisture retention in the skin's barrier for long-lasting hydration",
    "This reduces the appearance of thinning, wrinkled skin",
    "This is rich in antioxidants and helps stimulate the production of collagen",
    "This helps keep skin hydrated"
  ]

  const [selectedAreas, setSelectedAreas] = useState([]);

  const handleToggle = (id) => {
    // Check if the button is already toggled
    if (selectedAreas.includes(id)) {
      // Remove it from the array if already toggled
      setSelectedAreas(selectedAreas.filter((buttonId) => buttonId !== id));
    } else {
      if (id === 5) {
        setSelectedAreas([5]);
      } else {
        // Add it to the array if not toggled
        selectedAreas.filter((buttonId) => buttonId !== 5);
        console.log(selectedAreas);
        setSelectedAreas([...selectedAreas.filter((buttonId) => buttonId !== 5), id]);
      }
    }
  }

  const handleContinue = () => { 
    // Send form answers
    setQuizAnswers((quizAnswers) => {
      quizAnswers.hydratingMaterials = selectedAreas;
      console.log(quizAnswers);
      return quizAnswers;
    })

    setPage(3);
  }

  const handleSkip = () => {
    setPage(3);
  }

  return (
    <div className='form'>
      <ProgressBar setPage={setPage} currentProgress={2}/>
      <h2 className='form-title'>What hydrating ingredients are you interested in?</h2>
      {ingredients.map((ingredient, i) => {
        return <IngredientButton ingredient={ingredient} desc={descriptions[i]} onToggle={handleToggle} index={i} selectedIngredients={selectedAreas} key={i}/>
      })}
      <hr className="solid" />
      <NoneButton onToggle={handleToggle} text={"Unsure what my skin needs"} index={5} selectedIngredients={selectedAreas}/>
      <ContinueButton setQuizAnswers={handleContinue} optionSelected={selectedAreas}/>
      <SkipButton handleSkip={handleSkip}/>
    </div>
  )
}

export default HydratingIngredientsPage