
import React, {useState, useEffect} from 'react'

export default function Questions() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] =   useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

   const fetchQuizQuestions = async () => {
      const response = await fetch(`https://opentdb.com/api.php?amount=10&category=15&type=multiple`);
      const data = await response.json();
      setQuestions(data.results);
   };
    useEffect(() => {
       fetchQuizQuestions();
   }, []);  
  return (

    <div>
      Questions
    </div>
  )
}
