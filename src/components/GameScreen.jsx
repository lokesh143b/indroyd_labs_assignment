// src/components/GameScreen.jsx

import React from 'react';
import { useGameContext } from '../GameContext';

const GameScreen = () => {
  const { currentQuestionIndex, questions, handleAnswerSubmission } = useGameContext();
  
  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) {
    return <h1>Game Over! Thanks for playing.</h1>;
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>{currentQuestion.question}</h2>
      {currentQuestion.options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleAnswerSubmission(option[0])} // Sending first character (A, B, C, D) as answer
          style={{ display: 'block', margin: '10px auto', padding: '10px' }}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default GameScreen;
