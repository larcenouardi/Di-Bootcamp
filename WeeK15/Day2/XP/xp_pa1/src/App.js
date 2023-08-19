import React from 'react';
import BuggyCounter from './BuggyCounter';
import ErrorBoundary from './ErrorBoundary';
import './styles.css';
function App() {
  return (
    <div>
      <h1>Simulation 1:</h1>
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>

      <h1>Simulation 2:</h1>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

      <h1>Simulation 3:</h1>
      <BuggyCounter />
    </div>
  );
}

export default App;
