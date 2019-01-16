import React, { Component } from 'react';
import logo from './logo.svg';
import Routes from './Routes';
import './App.css';
import Nav from './Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Routes />
      </div>
    );
  }
}

export default App;
