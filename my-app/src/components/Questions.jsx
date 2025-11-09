import React, {useState, useEffect} from 'react'

export default function Questions({onGameEnd}) {
   const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex]= useState(0);
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


   const fetchData = async () => {
         try {
            const response = await fetch(`https://opentdb.com/api.php?amount=10&category=15&type=multiple`);
            const data = await response.json();
            console.log('fetched data:', data);
            const formattedQuestions = data.results.map(q => ({
               question: decodeHtmlEntities(q.question),
               correct_answer: decodeHtmlEntities(q.correct_answer),
               incorrect_answers: q.incorrect_answers.map(ans => decodeHtmlEntities(ans)),
               all_answers: [
                  ...q.incorrect_answers.map(a => decodeHtmlEntities(a)),
                  decodeHtmlEntities(q.correct_answer)].sort()}));

                  setQuestions(formattedQuestions);
                  if (formattedQuestions.length > 0){
                     setCurrentQuestionIndex(0);
                  }
                  setLoading(false);
         } catch (e) {
            setError('Failed to fetch questions. Please try again later.');
         }
      }
   useEffect(() => {
       fetchData();
       console.log('useEffect called');
   }, []);

   



   const handleAnswerClick = (answer) => {
      if (selectedAnswer) return; 
      setSelectedAnswer(answer);
      setShowFeedback(true);

      if (answer === questions[currentQuestionIndex].correct_answer) {
         setScore(score + 1);
      }
   };

   const handleNextQuestion = () => {
      const nextQuestion = currentQuestionIndex + 1;
      setSelectedAnswer(null);
      setShowFeedback(false);
      if (nextQuestion < questions.length) {
         setCurrentQuestionIndex(nextQuestion);
      } else {
         onGameEnd();
      }
   };
   
   if (loading) {
      return <div>Loading...</div>
   }

   if (error) {
      return <div> Error: {error}</div>
   }

   return (
    <div className='quiz-container'>
      <h1>Video Game Trivia</h1>
        <div className="question-counter">
         <span>Question {currentQuestionIndex + 1} of {questions.length} </span>  
      </div>

      <div className="question-text">
         <h2>{questions[currentQuestionIndex].question}</h2>
         </div>

      <div className='answer-buttons'>
         {questions[currentQuestionIndex].all_answers.map((answer, index) => {
            const isCorrect = answer === questions[currentQuestionIndex].correct_answer;
            const isSelected = answer === selectedAnswer;

            let buttonClass ='answer-btn';
            if (showFeedback){
               if (isCorrect) {
                  buttonClass += ' correct';
               } else if (isSelected && !isCorrect) {
                  buttonClass += ' incorrect';
               }
               }
            return (
               <button 
               key={index}
               onClick={() => handleAnswerClick(answer)}
               className={buttonClass}
               disabled={showFeedback}
            >{answer}</button>
            );
         })}
      </div>
      {showFeedback && (
         <button className='next-btn' onClick={handleNextQuestion}>
            {currentQuestionIndex + 1 < questions.length ? 'Next Question' : 'Finish Quiz'}
         </button>
      )}
      <div className='score-display'>
         <p>Current Score: {score}</p>
         </div>
    </div>
   )
}