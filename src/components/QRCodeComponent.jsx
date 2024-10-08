// src/components/QRCodeComponent.jsx

import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

const QRCodeComponent = () => {
  const url = `${window.location.origin}/player`;

  return (
    <div>
      <h1>Scan the QR code to join the game!</h1>
      <QRCodeSVG value={url} size={256} />
    </div>
  );
};

export default QRCodeComponent;
