import React from 'react'
import Questions from './components/Questions'
// script.js
import "nes.css/css/nes.min.css";
import './App.css'
import EndScreen from './components/EndScreen';
import Start from './components/Start';

export default function App() { 
  const [stage, setStage] = React.useState('start')
  return (
    <div className="App" style={{ backgroundColor: '#09095e',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#FFFF00',
      padding: '20px',
    }}>
      {stage === 'start' && (
        <Start onStart={() => setStage('quiz')} />
      
      )}
      {stage === 'quiz' && <Questions onGameEnd={() => setStage('results')} />}
       {stage === 'results' && <EndScreen onStart={() => setStage('start')} />}
    </div>
  )
}
