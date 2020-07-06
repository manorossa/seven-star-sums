import React, { useContext } from 'react';
import Button from '../../UI/atoms/Button/Button';
import withAnimation from '../../HOCs/withAnimation/withAnimation';
import '../Answers/Answers.css';
import './Result.css';
import SumContext from '../../context/SumContext';
import AnswerContext from '../../context/AnswerContext';

const Result: React.FC = () => {
  const { rightWrong } = useContext(SumContext);
  const { nextQuestionHandler, score, correctAns } = useContext(AnswerContext);
  const borderStyle = rightWrong ? 'green-border' : 'red-border';
  const starNum = score === 1 ? 'a' : 'another';
  const modifiers = 'horizontal';

  if (nextQuestionHandler === undefined) {
    throw new Error('No handlers are defined');
  }

  return (
    <div className={`container answer-container flex-order--2 ${borderStyle}`}>
      <div className="result-container">
        <h4 className="white-text">
          {rightWrong
            ? `Yay, you got the sum right! Have ${starNum} star!`
            : `Unlucky! The correct answer was ${correctAns}. You lose a life, but try again with another sum.`}
        </h4>
      </div>
      <Button type="button" handler={nextQuestionHandler} modifiers={modifiers}>
        Next question
      </Button>
    </div>
  );
};

export default withAnimation(Result, 'showResult');
