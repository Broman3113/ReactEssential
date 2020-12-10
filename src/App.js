import React from 'react';
import logo from './logo.svg';
import './App.css';

const Welcome = (props) =>{
  return (
      <div>
        <h1>Welcome, {props.name}</h1>
        {props.children || "Default text(instead You are 19)"}
      </div>
  )
}
const Welcome2 = (props) =>{
    // if (props.children){
    //     return props.children;
    // } else {
    //     return <div>Default</div>;
    // }

    return props.children ? props.children : "Default text(instead You are 19)" /*Using Ternary operator*/

}

const Age = (props) => {
  return (
      <div>
          <p>You are {props.age}</p>
      </div>
  )
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Welcome name="Andrey" age="19">
          <Age age="19"> Years old</Age>
        </Welcome>

        <Welcome2 name="Andrey">
        </Welcome2>

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
