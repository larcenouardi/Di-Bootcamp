import React, { useState } from 'react';

function Events() {
  const [isToggleOn, setIsToggleOn] = useState(true);

  const clickMe = () => {
    alert('I was clicked');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      alert('You pressed Enter key with value: ' + event.target.value);
    }
  };

  const toggleState = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <div>
      <button onClick={clickMe}>Click Me</button>
      <input onKeyDown={handleKeyDown} placeholder="Press Enter" />
      <button onClick={toggleState}>Toggle: {isToggleOn ? 'ON' : 'OFF'}</button>
    </div>
  );
}

export default Events;
