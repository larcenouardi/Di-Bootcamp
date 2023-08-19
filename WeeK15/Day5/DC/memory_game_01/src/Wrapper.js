import React, { useState } from 'react';
import Card from './Card';

const Board = ({ superheroes }) => {
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [clicked, setClicked] = useState([]);

  const handleClick = (id) => {
    if (clicked.includes(id)) {
      setScore(0);
      setClicked([]);
    } else {
      setClicked((prevClicked) => [...prevClicked, id]);
      setScore((prevScore) => prevScore + 1);
    }

    setTopScore((prevTopScore) => Math.max(prevTopScore, score + 1));
    shuffleCards();
  };

  const shuffleCards = () => {
    const shuffledSuperheroes = [...superheroes].sort(() => Math.random() - 0.5);
    //setSuperheroes(shuffledSuperheroes);
  };

  return (
    <div>
      {superheroes.map((superhero) => (
        <Card key={superhero.id} superhero={superhero} handleClick={handleClick} />
      ))}
    </div>
  );
};

export default Board;
