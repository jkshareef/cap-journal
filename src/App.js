import React from 'react';
import './App.css';
import Prompts from './components/Prompts';
import Triangle from './components/Triangle'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Cap
        </p>
      </header>
      <body className="App-body">
        <p>
        <Prompts/>
        </p>
        <p>
          <Triangle/>
        </p>
      </body>
      
    </div>
  );
}

export default App;
