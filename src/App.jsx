import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import QRCodeComponent from './components/QRCodeComponent';
import PlayerJoin from './components/PlayerJoin';
import GameScreen from './components/GameScreen';

const App = () => {
  const [players, setPlayers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showGameScreen, setShowGameScreen] = useState(false);

  // Sample Questions
  const questions = [
    { question: "What is the capital of France?", options: ["A) London", "B) Paris", "C) Rome", "D) Berlin"], correct: "B" },
    { question: "Who wrote 'Hamlet'?", options: ["A) Charles Dickens", "B) JK Rowling", "C) William Shakespeare", "D) Mark Twain"], correct: "C" },
    { question: "What is the chemical symbol for water?", options: ["A) O2", "B) H", "C) H2O", "D) CO2"], correct: "C" },
    { question: "Which planet is known as the Red Planet?", options: ["A) Earth", "B) Mars", "C) Jupiter", "D) Venus"], correct: "B" },
    { question: "In which year did the Titanic sink?", options: ["A) 1912", "B) 1918", "C) 1923", "D) 1931"], correct: "A" },
  ];

  const handlePlayerJoin = (name) => {
    setPlayers([...players, { name, score: 0 }]);
    setShowGameScreen(true);
  };

  const handleAnswerSubmission = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestionIndex].correct) {
      alert("Correct Answer!");
      setCurrentQuestionIndex((prevIndex) => {
        // Check if we are at the last question
        if (prevIndex + 1 >= questions.length) {
          alert("Game Over! Thanks for playing.");
          return 0; // Reset to first question
        }
        return prevIndex + 1;
      });
    } else {
      alert("Incorrect Answer");
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <Router>
      <Routes>
        {/* Main Screen: Shows QR Code */}
        <Route path="/" element={<QRCodeComponent />} />

        {/* Player Screen: For Mobile users after scanning QR code */}
        <Route
          path="/player"
          element={!showGameScreen ? (
            <PlayerJoin onJoin={handlePlayerJoin} />
          ) : (
            <Navigate to="/game" />
          )}
        />

        {/* Game Screen: After player joins */}
        <Route
          path="/game"
          element={
            <GameScreen
              currentQuestion={currentQuestion}
              onAnswer={handleAnswerSubmission}
              players={players} // Pass the players to GameScreen if needed
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
