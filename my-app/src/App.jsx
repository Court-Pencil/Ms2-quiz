import Home from './components/Menu'
import './App.css';
import Quiz from './components/Questions'
import EndScreen from './components/EndScreen';
import "nes.css/css/nes.min.css";
import { useState, useEffect } from 'react';
import Menu from './components/Menu';
import Questions from './components/Questions';

function App() {
  const [ stage, setStage] = useState("menu");
  return (
    <div>
      {stage === 'menu' && <Menu />}
      {stage === 'quiz' && <Questions/>}
      {stage === 'end' && <EndScreen />}

    </div>
  );
}

export default App;
