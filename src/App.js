import React from 'react';
import './App.css';
import { Clock } from "./components/Clock";
import { Toggle } from "./components/Toggle";

const MyComponent = () => {
  return <div>1. Create component that will appear and disappear by toggling corresponding button.</div>
}

//Class Component
class MyClassComponent extends React.Component{
  render() {
    return <div>To see more lessons check corresponding Branches :)</div>
  }
}

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <Clock/>

          <br/>
          <MyComponent/>
          <Toggle/>

          <MyClassComponent/>

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
