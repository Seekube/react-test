//Modules
import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';

//Components
import JediList from './JediList';
import FormNewJedi from './FormNewJedi';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <FormNewJedi />
        <JediList />
      </div>
    );
  }
}

export default App;