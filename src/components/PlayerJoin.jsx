// src/components/PlayerJoin.jsx

import React, { useState } from 'react';
import { useGameContext } from '../GameContext';

const PlayerJoin = () => {
  const [name, setName] = useState('');
  const { handlePlayerJoin } = useGameContext();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Enter Your Name to Join</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your Name"
      />
      <br />
      <button
        onClick={() => handlePlayerJoin(name)}
        disabled={!name}
        style={{ marginTop: '10px' }}
      >
        Join Game
      </button>
    </div>
  );
};

export default PlayerJoin;
