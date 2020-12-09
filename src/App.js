import React from 'react';
import logo from './logo.svg';
import './App.css';

const MyComponent = () => {
  return <div>(This is my component text)</div>
}

const MyProp = props => {
  return <div>This is my ({props.text})</div>
}

const MyText = ({text = "Default text"}) => {
  return <div>Text ({text})</div>
}

//Best option
const MyTextTernar = props =>{
  return <div>Best option text ({props.text || "Default text"})</div>
}

//Class Component
class MyClassComponent extends React.Component{
  render() {
    return <div>Class text ({this.props.text || "Default class text"})</div>
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<MyComponent></MyComponent> //Warning that has empty tag but we can use it too*/}
        <MyComponent/>

        <MyProp text="Prop text 1"/>
        <MyProp text="Prop text 2"/>

        <MyText text="1"/>
        <MyText/>

        <MyTextTernar text="1"/>
        <MyTextTernar/>

        <MyClassComponent text="1"/>
        <MyClassComponent/>
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
      </header>
    </div>
  );
}

export default App;
