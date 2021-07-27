import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
  const [value, setValue] = useState(0)

  useEffect(() => {
    document.title = `Valor: ${value}`;
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>     
        <h1>Valor: {value}</h1>   
        <button onClick={() => setValue(value + 1)}>Incrementar Valor</button>
      </header>      
    </div>
  );
}

export default App;
