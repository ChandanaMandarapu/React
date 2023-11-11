import { useState } from 'react';
import QuoteBox from './QuoteBox';
import './App.css';

function App() {
  const [bgColor, setBgColor] = useState('#f0f0f0');

  const handleBgColorChange = () => {
    setBgColor(getRandomColor());
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      <QuoteBox onBgColorChange={handleBgColorChange} />
    </div>
  );
}

export default App;
