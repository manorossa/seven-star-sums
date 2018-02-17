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
      possibleNums: [],
      baseNum: 20,
      num1: null,
      num2: '?',
      num3: null,
      op1: '+',
      op2: '='
    };
  }

  // Function to create a random number. Will be used throughout app
  getRandomNumber = (base) => {
    return Math.floor(Math.random() * Math.floor(base));
  };

  // Function to define the sum to be solved. For addition and subtraction
  // Runs at the beginning of the game, and every time the next question button is pressed
  defineSum = () => {
    let maxNum = this.state.possibleNums.length;
    let randomNumIndex = this.getRandomNumber(maxNum);
    let randomNum = this.state.possibleNums[randomNumIndex];
    console.log(`maxNum is ${maxNum}, randomNum is ${randomNum}, randomNumIndex is ${randomNumIndex}`)
    const possibleNums = [...this.state.possibleNums].filter( val => val !== randomNum );

    this.setState( { 
      num1: randomNum,
      num3: this.state.baseNum,
      possibleNums: possibleNums
    } )
  };

  // Function to define the possible answers to a sum. For addition and subtraction.
  // Runs once at the beginning of the game, then calls the defineSum function as a callback
  definePossibleNums = () => {
    let newNums = [];
    for (let i = 1; i < this.state.baseNum; i++) {
      newNums.push(i);
    }
    const possibleNums = [...this.state.possibleNums].concat(newNums);

    this.setState( { 
      possibleNums: possibleNums, 
    }, () => {this.defineSum()});
  }

  // Function to start the game and hide the splash screen.
  // Can be expanded to start different games (addition, subtraction, times table)
  startGameHandler() {
    this.definePossibleNums();     
    this.setState({
      showSplash: false
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.showSplash ? <Splashscreen 
          startgame={() => this.startGameHandler()} //need full function here to pass this to nested function
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
        <Result nextQ={this.defineSum}/>
        <Score />
      </div>
    );
  }
}

export default App;
