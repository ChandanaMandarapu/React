// src/App.js
// import React from 'react';
import MindMap from './MindMap';
import Node from './Node';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>Unique Mind Map App</h1>
      </div>
      <div className="app-content">
        <MindMap />
        {/* You can add other components or content here */}
        <Node />
      </div>
    </div>
  );
};

export default App;
