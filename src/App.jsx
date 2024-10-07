// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { GameProvider, useGameContext } from './GameContext';
import QRCodeComponent from './components/QRCodeComponent';
import PlayerJoin from './components/PlayerJoin';
import GameScreen from './components/GameScreen';

const App = () => {
  return (
    <GameProvider>
      <Router>
        <Routes>
          {/* Main Screen: Shows QR Code */}
          <Route path="/" element={<QRCodeComponent />} />

          {/* Player Screen: For Mobile users after scanning QR code */}
          <Route path="/player" element={<PlayerJoin />} />

          {/* Game Screen: After player joins */}
          <Route path="/game" element={<GameScreen />} />
        </Routes>
      </Router>
    </GameProvider>
  );
};

export default App;
