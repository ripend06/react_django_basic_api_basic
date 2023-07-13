import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Basic1 from './components/Basic1';
// import Basic2 from './components/Basic2';
// import BasicUseEffect from './components/BasicUseEffect';
// import TimeContainer from './components/TimeContainer';
// import ApiFetch from './components/ApiFetch';
import AppContext from './contexts/AppContext';
import B from './components/B';

function App() {
  return (
    <AppContext.Provider value={'value from App.js'}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            {/* <Basic1 name="Hooks"/>
            <Basic1 name="Today"/> */}
            {/* <Basic2/> */}
            {/* <BasicUseEffect/> */}
            {/* <TimeContainer /> */}
            {/* <ApiFetch /> */}
            <B />

        </header>
      </div>
    </AppContext.Provider>
  );
}

export default App;
