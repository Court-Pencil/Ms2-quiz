import React from "react";

export default function EndScreen({ onRestart, results }) {
  const { score, total } = results || {};
  const percentage = total ? ((score / total) * 100).toFixed(2) : 0;
  let message = "";

  if (percentage >= 80) {
    message = "Outstanding!";
  } else if (percentage >= 60) {
    message = "Great job!";
  } else if (percentage >= 40) {
    message = "Good effort!";
  } else {
    message = "Keep practicing!";
  }
  return (
    <div className="end-screen"> 
      <h1 className="end-title">Quiz Completed!</h1>
      <h2 className="end-message">{message}</h2>
      <p className="score-text">
        Your Score: {score} out of {total}
      </p>
      <p className="percentage">Percentage: {percentage}%</p>
      <button className="restart-btn" onClick={onRestart}>Restart Quiz</button>
    </div>
  );
}
