import React from 'react';
import './App.css';
import { Clock } from "./components/Clock";
import { Icon } from "./components/Icon";
import { iconTypes } from "./constants/icons";
import { Button } from "./components/Button";

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

          <Button className="customClass" id="id" iconType={iconTypes.plus}>First</Button>
          <br/>
          <Button className="customClass" size="small" color="primary" id="id">Second</Button>
          <br/>


          <Icon type={iconTypes.cross} color="cyan" id="23" className="plus"/>
          <br/>
          <Icon type={iconTypes.plus} size="16px" id="22"/>
          <br/>

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
