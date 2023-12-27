import React from 'react';
import Hello from './Hello3';
import Wrapper from './Wrapper';

function App2() {
  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial />
      <Hello color="pink"/>
    </Wrapper>
  );
}

export default App2;