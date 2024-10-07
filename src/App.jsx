import React, { useState } from 'react';
import QRCodeComponent from './components/QRCodeComponent';
import PlayerJoin from './components/PlayerJoin';
import GameScreen from './components/GameScreen';

const App = () => {
  const [players, setPlayers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false); // Toggle to simulate mobile/computer view
  const [showGameScreen, setShowGameScreen] = useState(false);

  
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["A) London", "B) Paris", "C) Rome", "D) Berlin"],
      correct: "B",
    },
    {
      question: "Who wrote 'Hamlet'?",
      options: [
        "A) Charles Dickens",
        "B) JK Rowling",
        "C) William Shakespeare",
        "D) Mark Twain",
      ],
      correct: "C",
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["A) O2", "B) H", "C) H2O", "D) CO2"],
      correct: "C",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["A) Earth", "B) Mars", "C) Jupiter", "D) Venus"],
      correct: "B",
    },
    {
      question: "In which year did the Titanic sink?",
      options: ["A) 1912", "B) 1918", "C) 1923", "D) 1931"],
      correct: "A",
    },
  ];

  const handlePlayerJoin = (name) => {
    setPlayers([...players, { name, score: 0 }]);
    setShowGameScreen(true);
  };

  const handleAnswerSubmission = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestionIndex].correct) {
      alert("Correct Answer!");
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      alert("Incorrect Answer");
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      {!showGameScreen ? (
        isMobile ? (
          <PlayerJoin onJoin={handlePlayerJoin} />
        ) : (
          <QRCodeComponent />
        )
      ) : (
        <GameScreen
          currentQuestion={currentQuestion}
          onAnswer={handleAnswerSubmission}
        />
      )}
    </div>
  );
};

export default App;
