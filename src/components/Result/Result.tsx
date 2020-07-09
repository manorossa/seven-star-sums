import React from 'react';
import Button from '../../UI/atoms/Button/Button';
import withAnimation from '../../HOCs/withAnimation/withAnimation';
import '../Answers/Answers.css';
import './Result.css';
import { useSum } from '../../context/SumContext';
import { useAnswer } from '../../context/AnswerContext';
import { useScore } from '../../context/ScoreContext';

const Result: React.FC = () => {
  const { rightWrong } = useSum();
  const { nextQuestionHandler, correctAns } = useAnswer();
  const { score, livesLeft } = useScore();
  const borderStyle = rightWrong ? 'green-border' : 'red-border';
  const starNum = score === 1 ? 'a' : 'another';
  const modifiers = 'horizontal';

  if (nextQuestionHandler === undefined) {
    throw new Error('No handlers are defined');
  }

  // This method will replace checkForEndGame in App.tsx
  const gameEnd = score === 7 || livesLeft === 0;
  // eslint-disable-next-line no-alert
  const gameReview = (): void => alert('Game review here');

  return (
    <div className={`container answer-container flex-order--2 ${borderStyle}`}>
      <div className="result-container">
        <h4 className="white-text">
          {rightWrong
            ? `Yay, you got the sum right! Have ${starNum} star!`
            : `Unlucky! The correct answer was ${correctAns}. You lose a life, but try again with another sum.`}
        </h4>
      </div>
      {gameEnd ? (
        <Button type="button" handler={gameReview} modifiers={modifiers}>
          Review game
        </Button>
      ) : (
        <Button type="button" handler={nextQuestionHandler} modifiers={modifiers}>
          Next question
        </Button>
      )}
    </div>
  );
};

export default withAnimation(Result, 'showResult');
