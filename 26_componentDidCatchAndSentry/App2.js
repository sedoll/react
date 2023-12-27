import React from 'react';
import User from './User';
import ErrorBoundary from './ErrorBoundary';

function App2() {
  const user = {
    id: 1,
    username: 'velopert'
  };
  return (
    <ErrorBoundary>
      <User />
    </ErrorBoundary>
  );
}

export default App2;