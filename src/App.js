import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="w3-row w3-mobile">
        <div className="w3-col m4 l3 ">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="w3-wide">Welcome to React</h2>
        </div>
        <p className="w3-col m8 l9 App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
