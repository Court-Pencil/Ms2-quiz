import React from 'react'
import Questions from './components/Questions'


import './App.css'
import EndScreen from './components/EndScreen';
import Start from './components/Start';

export default function App() { 
  const [stage, setStage] = React.useState('start')
  const [results, setResults] = React.useState(null);
  const handleGameEnd = (results) => {
    console.log('Game ended with results:', results);
    setResults(results);
    setStage('results');
  }
  return (
    <div className="App">
      {stage === 'start' && (
        <Start onStart={() => setStage('quiz')} />
      
      )}
      {stage === 'quiz' && <Questions onGameEnd={handleGameEnd} />}
       {stage === 'results' && <EndScreen onRestart={() => setStage('start')} results={results} />}
    </div>
  )
}
