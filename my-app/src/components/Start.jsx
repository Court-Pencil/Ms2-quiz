import React from 'react'

export default function Start({onStart}) {
  return (
    <div className="start-screen">
      <h1 className='start-h1'>Video Game Trivia</h1>
      <span className='start-text'>Test your knowledge about video games!</span>
      <button className='start-btn'  onClick={onStart}>Start Quiz</button>
    </div>
  )
}
