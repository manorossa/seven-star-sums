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

  state = {
    showSplash: true,
    possibleNums: [],
    baseNum: 20,
    num1: null,
    num2: '?',
    num3: null,
    op1: '+',
    op2: '=',
    possibleAns: [],
    correctAns: null
  };
  
  // Function to create a random number. Will be used throughout app
  getRandomNumber = (base) => {
    return Math.floor(Math.random() * Math.floor(base));
  };

  // Function to define the sum to be solved. For addition and subtraction
  // Runs at the beginning of the game, and every time the next question button is pressed
  defineSum = () => {
    // Destructure the relevant state elements
    const { possibleNums, baseNum, op1 } = this.state;
    // Choose a random number from the possible numbers array, 
    // based on the length of the possible numbers array
    let randomNum = possibleNums[this.getRandomNumber(possibleNums.length)];
    // Define how to get answers based on the operator
    // @todo add other methods when needed
    const answerMethod = {
      '+': (a, b) => a - b
    }
    // Define correct answer, and two other possibles
    const answer1 = answerMethod[op1](baseNum, randomNum);
    let answer2 = answer1 + (this.getRandomNumber(3)+1);
    answer2 = (answer2 > 20 ? 20 : answer2) // Don't allow random answer to be higher than 20
    let answer3 = answer1 - (this.getRandomNumber(3)+1);
    answer3 = (answer3 < 0 ? 0 : answer3) // Don't allow random answer to be negative
    // Put the possible answers into an array, ready to be shuffled
    const answerArray = [answer1, answer2, answer3];
    // console.log(`A1=${answer1}, A2=${answer2}, A3=${answer3},`);
    // Create a random order of indices of 0, 1 and 2
    let answerSet = new Set(), i = 0, a;
    while (i < 3) {
      a = this.getRandomNumber(3);
      answerSet.add(a);
      i = answerSet.size;
    }
    // console.log(answerSet);
    // shuffle the possible answer array according to the random order of indices
    const possibleAns = [...answerSet].map(x => answerArray[x]);
    // console.log(possibleAns);

    this.setState( { 
      num1: randomNum,
      num3: baseNum,
      // remove the chosen random number from the array of possible numbers and update the state
      possibleNums: [...possibleNums].filter( val => val !== randomNum ),
      possibleAns: possibleAns,
      correctAns: answer1
    } )
  };

  // Function to define the possible answers to a sum. For addition and subtraction.
  // Runs once at the beginning of the game, then calls the defineSum function as a callback
  definePossibleNums = () => {
    // Destructure the relevant state elements
    const { possibleNums, baseNum } = this.state;
    // Create and empty array, fill it with numbers from 1 to (baseNum -1),
    // this defines the possible numbers to be used in the left hand side of the sum
    let newNums = [];
    for (let i = 1; i < baseNum; i++) {
      newNums.push(i);
    }

    this.setState( { 
      possibleNums: [...possibleNums].concat(newNums), 
    }, () => {this.defineSum()});
  }

  // Function to start the game and hide the splash screen.
  // Can be expanded to start different games (addition, subtraction, times table)
  startGameHandler = () => {
    this.definePossibleNums();     
    this.setState({
      showSplash: false
    });
  }

  answerClickHandler = (value) => {
    console.log(`A button with the value of ${value} has been clicked.`)
  }

  render() {
    return (
      <div className="App">
        { !!this.state.showSplash && <Splashscreen 
          startgame={this.startGameHandler}
        /> }
        <Header />
        <Sum 
          num1={this.state.num1}
          num2={this.state.num2}
          num3={this.state.num3}
          op1={this.state.op1}
          op2={this.state.op2}
          />
        <Answer 
          answers={this.state.possibleAns}
          clicked={this.answerClickHandler}/>
        <Check />
        <Result nextQ={this.defineSum}/>
        <Score />
      </div>
    );
  }
}

export default App;
