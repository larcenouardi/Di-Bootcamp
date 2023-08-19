import React, { useState } from 'react';
import './App.css';
function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

  return (
    <div className="App">
      {/* Render language buttons */}
      {languages.map((language, index) => (
        <button
          key={index}
          onClick={() => {
            // Update the state to increase votes
            const updatedLanguages = [...languages];
            updatedLanguages[index].votes += 1;
            setLanguages(updatedLanguages);
          }}
        >
          {language.name} - Votes: {language.votes}
        </button>
      ))}
    </div>
  );
}

export default App;
