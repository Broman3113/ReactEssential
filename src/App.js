import React from 'react';
import './App.css';
import { Clock } from "./components/Clock";
import { JSONForm } from "./components/JSONForm";

const MyComponent = () => {
  return <div></div>
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
          <JSONForm/>

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
