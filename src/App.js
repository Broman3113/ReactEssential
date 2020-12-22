import React from 'react';
import { Avatar } from "./components/avatar";
import { Counter } from "./components/counter";
import { firstListItems } from "./constants/firstList";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Avatar 
        name="Ann"
        twitter="link to tw"
        facebook="link to fb"
      />
      <Counter />
      <ul>
        {firstListItems.map(item => <li key={item.id}>{item.text}</li>)}
      </ul>
    </div>
  );
}

export default App;
