
import './App.css';

function App() {

  const goalSelections = ["Remove Crepey Skin", "Relieve Dry, Flaky Skin", "Get Firmer, Tighter, Younger Looking Skin"];
  const goalPics = ["https://city-beauty-quiz-imgs.s3.amazonaws.com/intro-crepey-skin.png", "https://city-beauty-quiz-imgs.s3.amazonaws.com/intro-dry-flaky.png", "https://city-beauty-quiz-imgs.s3.amazonaws.com/intro-firmer.png"]

  return (
    <div className="App">
      <img className='logo' src='https://city-beauty-quiz-imgs.s3.amazonaws.com/city-beauty-logo.png'></img>
      <div className='intro-page-container'>
        <div className='desc-container'>
          <h1 className='desc-title'>Achieve Perfectly <i>Smooth</i>, <i>Youthful</i> Skin</h1>
          <p className='desc-text'>Get a personalized skin care treatment</p>
        </div>
        <div className='selections'>
          <h2 className='goal-title'>Choose Your Goal</h2>
          {goalSelections.map((goal, i) => {
            return <div className="goal-selection"><h3 className='goal'>{goal}</h3><img className='goal-img' src={goalPics[i]} alt='Skin Goal Selection'></img></div>
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
