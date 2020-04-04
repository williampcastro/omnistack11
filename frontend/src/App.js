import React, { useState } from 'react';

import './global.css';

import Logon from './pages/Logon';

function App() {

  let [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter++);

  console.log(counter)

  return (
    <Logon />
  );
}

export default App;
