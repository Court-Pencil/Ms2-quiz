import React from 'react'

export default function EndScreen({onStart}) {
  return (
    <div>
      GameOver
      <button onClick={onStart}>Restart Quiz</button>
    </div>
  )
}
