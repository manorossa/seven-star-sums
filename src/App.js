import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Sum from './components/Sum'
import Answer from './components/Answer'
import Check from './components/Check'
import Result from './components/Result'
import Score from './components/Score'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Sum />
        <Answer />
        <Check />
        <Result />
        <Score />
      </div>
    );
  }
}

export default App;
