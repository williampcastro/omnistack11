import React, { useState } from 'react';

import Header from './Header';

function App() {

  let [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter++);

  console.log(counter)

  return (
    <div>
      <Header> Contador: {counter} </Header>
      <button onClick={increment}> Incrementar </button>
    </div>
  );
}

export default App;
