import React, {useState} from 'react'

export default function Questions() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showFeedback, setShowFeedback] = useState(false);

   const fetchQuestions = async () => {
   try {
      const response = await fetch(
         'https://jsonplaceholder.typicode.com/posts?_limit=10https://opentdb.com/api.php?amount=10&category=15&type=multiple'
      );
      const data = await response.json();
      setCurrentQuestion(data);
   } catch (error) {
      console.log(error);
   }
};
  return (
    <div>
      <h1>Video Game Trivia</h1>
        <div className="question-section">
        <button>Next</button>     

    </div>
    </div>
  )
}

