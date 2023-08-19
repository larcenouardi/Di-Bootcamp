import React from 'react';
import Car from './components/Car';
import './App.css';

const carInfo = { name: "Ford", model: "Mustang" };

function App() {
  return (
    <div className="App">
      <Car carInfo={carInfo} />
    </div>
  );
}

export default App;
