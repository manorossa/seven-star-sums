import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Sum from './components/Sum'
import Answer from './components/Answer'
import Check from './components/Check'
import Result from './components/Result'
import Score from './components/Score'
import Splashscreen from './components/Splashscreen';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showSplash: true,
      usedNums: [],
      baseNum: 20,
      num1: null,
      num2: '?',
      num3: null,
      op1: '+',
      op2: '='
    };
  }

  getRandomNumber = (base) => {
    return Math.floor(Math.random() * Math.floor(base));
  };

  defineSum = () => {
    let maxNum = this.state.baseNum - 2;
    let number3 = this.getRandomNumber(maxNum) + 1;
    const newUsedNums = [...this.state.usedNums, number3];
    this.setState( { 
      usedNums: newUsedNums, 
      num1: number3,
      num3: this.state.baseNum
    } )
  };

  startGameHandler() {
    this.defineSum();
    this.setState({
      showSplash: false
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.showSplash ? <Splashscreen 
          startgame={() => this.startGameHandler()}
        /> : null}
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
