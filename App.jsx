
import React from 'react';
import MindMap from './components/MindMap';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="header">
        <h1>Unique Mind Map App</h1>
      </div>
      <div className="app-content">
        <MindMap />
      </div>
    </div>
  );
}

export default App;
