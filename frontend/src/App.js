import React, { useState } from 'react';

import './global.css';

import Routes from './routes';

function App() {

  let [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter++);

  console.log(counter)

  return (
    <Routes />
  );
}

export default App;
