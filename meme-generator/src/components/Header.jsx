// import React from 'react';
import TrollFace from '../images/Troll Face.png'; // Import the image

const Header = () => {
  return (
    <header className="header">
      <img src={TrollFace} className="header--image" alt="Troll Face"/>
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">React - Project 8</h4>
    </header>
  );
};

export default Header;
