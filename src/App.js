import React from 'react';
import logo from './logo.svg';
import './App.css';
import Basic1 from './components/Basic1';
import Basic2 from './components/Basic2';
import BasicUseEffect from './components/BasicUseEffect';
import TimeContainer from './components/TimeContainer';
import ApiFetch from './components/ApiFetch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          {/* <Basic1 name="Hooks"/>
          <Basic1 name="Today"/> */}
          {/* <Basic2/> */}
          {/* <BasicUseEffect/> */}
          {/* <TimeContainer /> */}
          <ApiFetch />
      </header>
    </div>
  );
}

export default App;
