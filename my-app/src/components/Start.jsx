import React from 'react'

export default function Start({onStart}) {
  return (
    <div className="start-screen">
      <h1 className='start-h1'>Video Game Trivia</h1>
      <span>Test your knowledge about video games!</span>
      <button className='nes-btn' style={{padding : '10rem'}} onClick={onStart}>Start Quiz</button>
    </div>
  )
}
