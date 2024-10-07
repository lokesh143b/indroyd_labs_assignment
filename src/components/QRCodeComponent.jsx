import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

const QRCodeComponent = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Scan the QR Code to Join the Game</h1>
      <QRCodeSVG value={window.location.href} size={200} />
    </div>
  );
};

export default QRCodeComponent;
