// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { GameProvider } from './GameContext';
import QRCodeComponent from './components/QRCodeComponent';
import PlayerJoin from './components/PlayerJoin';
import GameScreen from './components/GameScreen';

const App = () => {
  return (
    <GameProvider>
      <Router>
        <Routes>
          <Route path="/" element={<QRCodeComponent />} />
          <Route path="/player" element={<PlayerJoin />} />
          <Route path="/game" element={<GameScreen />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </GameProvider>
  );
};

export default App;
