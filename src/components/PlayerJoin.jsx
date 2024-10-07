import React, { useState } from 'react';

const PlayerJoin = ({ onJoin }) => {
  const [name, setName] = useState('');

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
        onClick={() => onJoin(name)}
        disabled={!name}
        style={{ marginTop: '10px' }}
      >
        Join Game
      </button>
    </div>
  );
};

export default PlayerJoin;
