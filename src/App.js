import React from 'react';
import logo from './logo.svg';
import './App.css';

const MyComponent = () => {
  return <div>This is the Main page on React Essential!</div>
}

//Class Component
class MyClassComponent extends React.Component{
  render() {
    return <div>To see lessons check corresponding Branches :)</div>
  }
}

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <br/>
          <MyComponent/>

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
