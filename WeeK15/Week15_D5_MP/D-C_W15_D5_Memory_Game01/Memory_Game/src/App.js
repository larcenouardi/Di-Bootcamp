import React, { useState } from 'react';
import Card from './Card';
import Wrapper from './Wrapper';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import characters from './characters';
import './App.css';

const App = () => {
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  const handleClick = (id) => {
    if (clickedCards.includes(id)) {
      // Reset the score and clicked cards
      setScore(0);
      setClickedCards([]);
    } else {
      // Increment the score and add the clicked card to the list
      setScore(score + 1);
      setClickedCards([...clickedCards, id]);
      // Update the top score if necessary
      if (score + 1 > topScore) {
        setTopScore(score + 1);
      }
    }
  };

  return (
    <div>
      <Navbar score={score} topScore={topScore} />
      <Jumbotron />
      <Wrapper>
        {characters.map((character) => (
          <Card key={character.id} character={character} handleClick={handleClick} />
        ))}
      </Wrapper>
    </div>
  );
};

export default App;
