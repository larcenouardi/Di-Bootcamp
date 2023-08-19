import React, { useState } from 'react';

function Phone() {
  const [brand, setBrand] = useState("Samsung");
  const [model, setModel] = useState("Galaxy S20");
  const [color, setColor] = useState("black");
  const [year, setYear] = useState(2020);

  const changeColor = () => {
    setColor("blue");
  };

  return (
    <div>
      <p>MY Phone is a {brand}</p>
      <p>It is a {color} {model} From {year}</p>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default Phone;
