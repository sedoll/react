import React, { useState, useEffect } from 'react';
import './App.css';

function App2() {
  const [value, setValue] = useState('');
  useEffect(() => {
    console.log(value);
  }, []);

  return (
    <div>
      <p>와우</p>
    </div>
  );
}

export default App2;