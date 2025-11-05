import React from 'react'
import Questions from './components/Questions'
import './App.css'

export default function App() { 
  const [stage, setStage] = React.useState('start')
  return (
    <div className="App">
      {stage === 'start' && (
        <div>
          <h1>Welcome to the Video Game Trivia!</h1>
          <button onClick={() => setStage('quiz')}>Start Quiz</button>
        </div>
      )}
      {stage === 'quiz' && <Questions />}
       {stage === 'results' && <div>Your results will be displayed here.</div>}
    </div>
  )
}
