import React, { Component } from 'react';
import './App.css';
import Personnels from './components/personnels'
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Express Starter</h1>
        </header>
        <Personnels />
      </div>
    );
  }
}

export default App;

//Comment Code Block Ctrl+K+C/Ctrl+K+U