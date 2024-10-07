// src/components/GameScreen.js

import React from 'react';
import { useGameContext } from '../GameContext';

const GameScreen = () => {
  const {
    currentQuestionIndex,
    questions,
    handleAnswerSubmission,
    players,
  } = useGameContext();

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
      <h3>Current Players:</h3>
      {players.map((player, index) => (
        <p key={index}>{player.name} - Score: {player.score}</p>
      ))}
    </div>
  );
};

export default GameScreen;
