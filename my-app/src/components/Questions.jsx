
import React, {useState, useEffect} from 'react'

export default function Questions() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] =   useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);


   const fetchQuizQuestions = async () => {
      const response = await fetch(`https://opentdb.com/api.php?amount=10&category=15&type=multiple`);
      const data = await response.json();
      setQuestions(data.results);
   };
    useEffect(() => {
       fetchQuizQuestions();
   }, []);  

   const handleAnswerOptionClick = (isCorrect, answer) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    } 
     
    const updatedSelectedAnswers = [...selectedAnswers]
    updatedSelectedAnswers[currentQuestion] = answer;
    setSelectedAnswers(updatedSelectedAnswers);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true);   
    }

   } 



  return (

    <div className='question-section'>
      <h1>Video Game Trivia</h1>
      <div className='question-text'>
        <div>{questions[currentQuestion]?.question}</div>
      </div>
      <div className='answer-section'>
        
      </div>
      <div className='question-count'>
        <span>{currentQuestion + 1} out of {questions.length}</span>
      </div>
      <div className='next-btn'>
        {currentQuestion < questions.length && (
          <button  onClick={() => setCurrentQuestion(currentQuestion + 1)}
      disabled={!selectedAnswer}
>Next Question</button>
        )}
      </div>
      
    </div>
    

  )
}
