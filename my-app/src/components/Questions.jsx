import React, {useState, useEffect, use} from 'react'

export default function Questions() {
   const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showFeedback, setShowFeedback] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

   const decodeHtmlEntities = (text) => {
      const textArea = document.createElement('textarea');
      textArea.innerHTML = text;
      return textArea.value;
   }

   const fetchQuestions = async () => {
   try {
      const response = await fetch(
         'https://opentdb.com/api.php?amount=10&category=15&type=multiple'
      );
      const data = await response.json();
       setCurrentQuestion(data.results);
      console.log(data.results);

   } catch (error) {
      console.log(error);
   }
};
                                                                                                                                                                                                                                                                                                                                             
   useEffect(() => {
      fetchQuestions();
   }, []);

   return (
    <div>
      <h1>Video Game Trivia</h1>
        <div className="question-section">
          
      </div>

        <button>Next</button>     

    </div>
    
    
  )
}

