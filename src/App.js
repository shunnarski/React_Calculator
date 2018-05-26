import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Calculator} from './Calculator/calculator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Calculator App!</h1>
          <h3>Developed by Alec Shunnarah using React.js</h3>
        </header>
        <div className="calculator">
          <Calculator/>
        </div>

      </div>
    );
  }
}

export default App;
