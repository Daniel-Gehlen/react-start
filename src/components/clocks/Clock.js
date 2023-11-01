import React, { useState, useEffect } from 'react';

function Clock({ color }) {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [clockColor, setClockColor] = useState(color);

  const handleColorChange = () => {
    // Gere uma cor aleatória
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setClockColor(randomColor);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1 style={{ color: clockColor }}>{time}</h1>
      <button onClick={handleColorChange}>Mudar Cor</button>
    </div>
  );
}

export default Clock;
