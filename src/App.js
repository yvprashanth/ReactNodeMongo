import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Heroes from './components/heroes';

class App extends Component {

  render() {
    return (
      <div>
       <h1>
        Heroes
       </h1>
       <div className="header-bar" />
        <Heroes />
      </div>
    );
  }
}

export default App;
