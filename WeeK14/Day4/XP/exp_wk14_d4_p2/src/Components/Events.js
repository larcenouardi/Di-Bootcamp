import React, { useState } from 'react';

function Events() {
  const [isToggleOn, setIsToggleOn] = useState(true);
  const [inputValue, setInputValue] = useState('');

  const clickMe = () => {
    alert('I was clicked');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      alert('Key Enter: ' + inputValue);
    }
  };

  const toggleState = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <div>
      <button onClick={clickMe}>Click Me</button>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type and press Enter"
      />
      <button onClick={toggleState}>
        {isToggleOn ? 'ON' : 'OFF'}
      </button>
      <p>Output for '{isToggleOn ? 'ON' : 'OFF'}': {isToggleOn ? 'on' : 'off'}</p>
    </div>
  );
}

export default Events;
