import React, { Component } from 'react';
import './App.css';
import Clock from './clock.js'

class App extends Component {

  updateImage() {

  }

  render() {
    return (
      <div className="App">
        <div className="App-body">
          <div className="App-body_content">
            <Clock name='Hiromu'/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
