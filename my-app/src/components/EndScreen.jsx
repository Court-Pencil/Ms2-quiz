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
    <div>
      <h1>Quiz Completed!</h1>
      <h2>{message}</h2>
      <p>
        Your Score: {score} out of {total}
      </p>
      <p>Percentage: {percentage}%</p>
      <button onClick={onRestart}>Restart Quiz</button>
    </div>
  );
}
