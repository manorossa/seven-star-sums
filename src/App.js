import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Sum from './components/Sum'
import Answer from './components/Answer'
import Check from './components/Check'
import Result from './components/Result'
import Score from './components/Score'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num2: '?',
      num3: 20,
      num1: null,
      op1: '+',
      op2: '='
    };
  }

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
