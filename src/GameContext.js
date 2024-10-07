// src/GameContext.js

import React, { createContext, useState, useContext } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [players, setPlayers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showGameScreen, setShowGameScreen] = useState(false);
  
  const questions = [
    { question: "What is the capital of France?", options: ["A) London", "B) Paris", "C) Rome", "D) Berlin"], correct: "B" },
    { question: "Who wrote 'Hamlet'?", options: ["A) Charles Dickens", "B) JK Rowling", "C) William Shakespeare", "D) Mark Twain"], correct: "C" },
    { question: "What is the chemical symbol for water?", options: ["A) O2", "B) H", "C) H2O", "D) CO2"], correct: "C" },
    { question: "Which planet is known as the Red Planet?", options: ["A) Earth", "B) Mars", "C) Jupiter", "D) Venus"], correct: "B" },
    { question: "In which year did the Titanic sink?", options: ["A) 1912", "B) 1918", "C) 1923", "D) 1931"], correct: "A" },
  ];

  const handlePlayerJoin = (name) => {
    setPlayers((prevPlayers) => [...prevPlayers, { name, score: 0 }]);
    setShowGameScreen(true);
  };

  const handleAnswerSubmission = (selectedAnswer) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correct) {
      alert("Correct Answer!");
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      alert("Incorrect Answer");
    }
  };

  return (
    <GameContext.Provider value={{
      players,
      currentQuestionIndex,
      questions,
      showGameScreen,
      handlePlayerJoin,
      handleAnswerSubmission,
    }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => useContext(GameContext);
