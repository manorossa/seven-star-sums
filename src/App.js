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

    const defineSumNumber = (base) => {
      // return 'i work';
      return Math.floor(Math.random() * Math.floor(base));
      // this.setState({num1: num1});
    };

    const baseNum = 20;

    this.state = {
      num2: '?',
      num3: 20,
      num1: defineSumNumber(this.num3),
      op1: '+',
      op2: '='
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Sum 
          num1={this.state.num1}
          num2={this.state.num2}
          num3={this.state.num3}
          op1={this.state.op1}
          op2={this.state.op2}
          />
        <Answer />
        <Check />
        <Result />
        <Score />
      </div>
    );
  }
}

export default App;
