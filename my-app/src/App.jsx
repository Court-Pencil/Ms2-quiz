import Home from './components/Menu'
import './App.css';
import Quiz from './components/Questions'
import EndScreen from './components/EndScreen';
import "nes.css/css/nes.min.css";

function App() {
  return (
    <div className="App">
      <Home/>
      <Quiz/>
      <EndScreen/>
    </div>
  );
}

export default App;
