import React, { useState } from 'react';
import './App.css';

import Header from './Header';

function App() {
  // useState retorna um array -> [valor do estado, função para atualizar o valor do estado]
  const [ counter, setCounter ] = useState(0);

  function handleButtonClick() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <Header title="Hi There!"/>

      <h1>{counter}</h1>
      <button type="button" onClick={handleButtonClick}>Aumentar</button>
    </div>
  );
}

export default App;
