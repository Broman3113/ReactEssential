import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ClickCounter } from './components/ClickCounter';
import { List } from  './components/List';

const numbers = [1,2,3,4,5];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <ClickCounter/>

        <List items={numbers}></List>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
