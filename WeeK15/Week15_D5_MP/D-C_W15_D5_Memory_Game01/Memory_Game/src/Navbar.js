import React from 'react';

const Navbar = ({ currentScore, highScore }) => {
  return (
    <header className="navbar">
      <h1>Superheroes Memory Game</h1>
      <nav>
        <p>Score: <span>{currentScore}</span></p>
        <p>Top Score: <span>{highScore}</span></p>
      </nav>
    </header>
  );
};

export default Navbar;
